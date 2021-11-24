// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < max) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;

  // if (node === null) {
  //   return true;
  // }

  // if (
  //   (node.right && node.data > node.right.data) ||
  //   (node.left && node.data < node.left.data)
  // ) {
  //   return false;
  // }

  // if (!validate(node.left, min, node.data)) {
  //   return false;
  // }

  // if (!validate(node.right, node.data, max)) {
  //   return false;
  // }

  // return true;
}

module.exports = validate;
