import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphNode } from "../../types";

// Define a type for the slice state
interface NodesState {
	value: GraphNode[][];
}

// Define the initial state using that type
const initialState: NodesState = {
	value: [],
};

export const nodesSlice = createSlice({
	name: "nodes",
	initialState: initialState,
	reducers: {
		generateNodes: (state: NodesState) => {
			const newNodes: GraphNode[][] = [];
			for (let row = 0; row < 25; row++) {
				const currentRow: GraphNode[] = [];
				for (let col = 0; col < 50; col++) {
					const node: GraphNode = {
						isStart: col === 5 && row === 10,
						isEnd: col === 45 && row === 15,
						row: row,
						col: col,
						isVisited: false,
						isWall: false,
						previousNode: undefined,
					};
					currentRow.push(node);
				}
				newNodes.push(currentRow);
				state.value = newNodes;
			}
		},

		setNodeAsWall: (
			state: NodesState,
			action: PayloadAction<{ row: number; col: number }>
		) => {
			const { row, col } = action.payload;
			state.value.forEach((rows, rowIdx) => {
				if (rowIdx === row) {
					rows.forEach((node, nodeIdx) => {
						if (nodeIdx === col) {
							node.isWall = true;
						}
					});
				}
			});
		},
	},
});

export const { generateNodes, setNodeAsWall } = nodesSlice.actions;

export default nodesSlice.reducer;
