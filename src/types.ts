export interface GraphNode {
	isStart: boolean;
	isEnd: boolean;
	row: number;
	col: number;
	isVisited: boolean;
	isWall: boolean;
	previousNode: GraphNode | undefined;
}
