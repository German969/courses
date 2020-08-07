// Drag and Drop

// Define draggable elements
`<div draggable="true">
  ...
</div>`
// images, text selections and links are draggable by default

// Define a drop target
const element = document.querySelector('#my-drop-target')
element.addEventListener('dragover', event => {
  event.preventDefault()
})

// drag start
element.addEventListener('dragstart', event => {
  //...
})

// on the drop target
// dragenter, dragover
// dragleave when leaving the target

// dragend on dragged elem on mouse release and drop on target

// DataTransfer
// dropEffect, effectAllowed, files, items (readonly), types(readonly)

// Set/get effect
// effectAllowed in dragstart
// none, move, copy, link, copyMove, copyLink, linkMove, all (default)
// effectAllowed editable in dragenter or dragover
element.addEventListener('dragenter', event => {
  event.dataTrasfer.dropEffect = 'move'
})

//Access the DataTransferred
// For files
element.addEventListener('dragenter', event => {
  for (item of event.dataTrasfer.items) {
    const theFile = item.getAsFile()
  }
})

// String data (passes as a callback)
element.addEventListener('dragenter', event => {
  for (item of event.dataTrasfer.items) {
    item.getAsString(theString => {
      console.log(theString)
    })
  }
})

// The types of items files being dragged is stored in the types property of the dataTransfer object
