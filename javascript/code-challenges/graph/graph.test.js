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
});
