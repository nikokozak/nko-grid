A small utility library for making and working with grids.

## Installation
1. `npm install nko-grid`
2. `import Grid from 'nko-grid'`
3. See docs below for usage.

## Usage

Declare a new NKOGrid(), which takes the following parameters in the form of an object:

```javascript

{
	width: 250 // Default: 100
	height: 250 // Default: 100
	centerX: 125 // Default: 0
	centerY: 125 // Default: 0
	numX: 20 // Default: 10
	numY: 20 // Default: 10
}

```

This will create an instance of the NKOGrid, with the field `yourGrid.nodes` populated with an Array of objects, each having the following properties:

```javascript

	yourNode.x // x position on the canvas
	yourNode.y // y position on the canvas
	yourNode.iX // column of the node
	yourNode.iY // row of the node
	yourNode.data // empty object, can be replaced by custom data, or instances of objects.

```

The NKOGrid instance has two methods: 

- `yourGrid.getNode(column, row)`: returns a node object.
- `yourGrid.getNodeSafe(column, row)`: will throw a RangeError if selection is out of bounds.


## License
MIT

