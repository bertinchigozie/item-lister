var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete Event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add Item
function addItem(e) {
  e.preventDefault();

  // Get Input Value
  var newItem = document.getElementById("item");
  if (newItem.value === "") {
    alert("Enter Item");
  } else {
    //   Create new element li
    var li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    // Add Text Node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // Create button
    var deleteBtn = document.createElement("button");
    // Add classes
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    //   append textnode for the button
    deleteBtn.appendChild(document.createTextNode("X"));
    //   Append deleteBtn to li
    li.appendChild(deleteBtn);

    //   Append li to list
    itemList.appendChild(li);

    // clear input field
    newItem.value = "";
  }
}

// Remove item
function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // convert to Array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
