function choice(items) {
  let rand = Math.floor(Math.random() * items.length) + 1;
  return items[rand];
}

function remove(items, item) {
  let idx = items.indexOf(item);
  if (idx) {
    return items.splice(idx, 1);
  }

  return undefined;
}

export { choice, remove };