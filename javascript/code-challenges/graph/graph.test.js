'use strict';
const { Graph, Vertex } = require('./graph');

describe('Testing Graph class', () => {
  let testGraph = null;
  let testVert = null;
  let testVert2 = null;
  let testVert3 = null;

  test('Can instantiate a Graph', () => {
    let graph = new Graph();
    expect(graph.adjacencyList instanceof Map).toBeTruthy();
  });

  test('Can add a node to the Graph', () => {
    testGraph = new Graph();
    testVert = testGraph.addVertex(5);
    testVert2 = testGraph.addVertex(6);

    expect(testVert.value).toEqual(5);
    expect(testVert2.value).toEqual(6);
    expect(testGraph.adjacencyList.size).toEqual(2);
  });

  test('Can add an edge to the Graph', () => {
    let neighbors = testGraph.addEdge(testVert, testVert2);
    expect(neighbors[0].endVertex).toEqual(testVert2);
    expect(neighbors[0].weight).toEqual(0);

    let vert = new Vertex(5);
    neighbors = testGraph.addEdge(vert, testVert2);
    expect(neighbors).toBeFalsy();
  });

  test('Can get all vertices', () => {
    testVert3 = testGraph.addVertex(4);
    let vertices = testGraph.getVertices();
    expect(vertices.length).toEqual(3);
  });

  test('Can get neighbors', () => {
    let neighbors = testGraph.getNeighbors(testVert);
    expect(neighbors.length).toEqual(1);

    testGraph.addEdge(testVert, testVert3);
    neighbors = testGraph.getNeighbors(testVert);
    expect(neighbors.length).toEqual(2);
  });

  test('Can perform breadth-first traversal', () => {
    let testGraph2 = new Graph();
    let start = testGraph2.addVertex('Pandora');
    let vertex2 = testGraph2.addVertex('Arendelle');

    testGraph2.addEdge(start, vertex2);

    let vertex3 = testGraph2.addVertex('Metroville');
    testGraph2.addEdge(vertex2, vertex3);

    let vertex4 = testGraph2.addVertex('Monstropolis');
    testGraph2.addEdge(vertex2, vertex4);
    testGraph2.addEdge(vertex3, vertex4);

    let vertex5 = testGraph2.addVertex('Narnia');
    testGraph2.addEdge(vertex3, vertex5);

    let vertex6 = testGraph2.addVertex('Naboo');
    testGraph2.addEdge(vertex3, vertex6);
    testGraph2.addEdge(vertex5, vertex6);

    let traversed = testGraph2.breadthFirst(start);
    expect(traversed).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
  });

  test('Can find price of flights in business trip', () => {
    testGraph = new Graph();
    let start = testGraph.addVertex('Pandora');
    let vertex2 = testGraph.addVertex('Arendelle');

    testGraph.addEdge(start, vertex2, 150);

    let vertex3 = testGraph.addVertex('Metroville');
    testGraph.addEdge(vertex2, vertex3, 99);
    testGraph.addEdge(start, vertex3, 82);

    let vertex4 = testGraph.addVertex('Monstropolis');
    testGraph.addEdge(vertex2, vertex4, 42);
    testGraph.addEdge(vertex3, vertex4, 105);

    let vertex5 = testGraph.addVertex('Narnia');
    testGraph.addEdge(vertex3, vertex5, 37);

    let vertex6 = testGraph.addVertex('Naboo');
    testGraph.addEdge(vertex3, vertex6, 26);
    testGraph.addEdge(vertex5, vertex6, 250);
    testGraph.addEdge(vertex4, vertex6, 73);

    let price = testGraph.businessTrip([start, vertex2]);
    let price2 = testGraph.businessTrip([vertex3, start]);
    let price3 = testGraph.businessTrip([vertex2, vertex4, vertex6]);

    expect(price).toEqual(150);
    expect(price2).toEqual(null);
    expect(price3).toEqual(115);
  });
});
