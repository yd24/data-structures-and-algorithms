'use strict';

class Vertex {
  constructor(data) {
    this.value = data;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.endVertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this.size++;
    return vertex;
  }

  addEdge(vert1, vert2, weight=0) {
    if (this.adjacencyList.has(vert1)) {
      let neighbors = this.adjacencyList.get(vert1);
      neighbors.push(new Edge(vert2, weight));
      return neighbors;
    } else {
      return null;
    }
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vert) {
    return this.adjacencyList.get(vert);
  }

  size() {
    return this.size;
  }
}

module.exports = {
  Graph,
  Vertex,
};
