class Graph {
  constructor() {
    this.adjacencyList = {};
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList = this.adjacencyList[vertex1].filter(
      (neighbor) => neighbor != vertex2
    );
    this.adjacencyList = this.adjacencyList[vertex2].filter(
      (neighbor) => neighbor != vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((neighbor) =>
      this.removeEdge(vertex, neighbor)
    );
    delete this.adjacencyList[vertex];
  }
  DFS(start) {
    const result = [];
    const visited = {};
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (visited[vertex]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  BFS(start) {
    const queue = [];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  isCyclic() {
    const visited = {};
    for (let vertex of Object.keys(this.adjacencyList)) {
      if (!visited[vertex]) {
        if (this._isCyclic(vertex, visited, null)) {
          return true;
        }
      }
    }
    return false;
  }

  _isCyclic(start, visited, perant) {
    visited[start] = true;
    for (let neighbor of this.adjacencyList[start]) {
      if (!visited[neighbor]) {
        if (this._isCyclic(neighbor, visited, start)) {
          return true;
        }
      } else if (neighbor !== perant) {
        return true;
      }
    }
    return false;
  }

}