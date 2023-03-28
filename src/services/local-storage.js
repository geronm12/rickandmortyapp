function AddItem(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

function GetItem(key) {
  const item = localStorage.getItem(key);
  return item ?? JSON.parse(item);
}

function RemoveItem(key) {
  localStorage.removeItem(key);
}

export { AddItem, GetItem, RemoveItem };
