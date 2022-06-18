import { useEffect, useState } from "react";
import { GraphNode } from "../types";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

const PathFindingVisualizer = () => {
	const [nodes, setNodes] = useState<GraphNode[][]>([]);

	useEffect(() => {
		const newNodes: GraphNode[][] = [];
		for (let row = 0; row < 25; row++) {
			const currentRow: GraphNode[] = [];
			for (let col = 0; col < 50; col++) {
				const node: GraphNode = {
					isStart: col === 5 && row === 10,
					isEnd: col === 45 && row === 15,
				};
				currentRow.push(node);
			}
			newNodes.push(currentRow);
		}
		setNodes(newNodes);
	}, []);

	return (
		<>
			<button>DFS</button>
			<div className='grid'>
				{nodes.map((row: GraphNode[], rowIdx: number) => {
					return (
						<div key={rowIdx}>
							{row.map((node: GraphNode, nodeIdx: number) => {
								const { isEnd, isStart } = node;
								return (
									<Node
										key={nodeIdx}
										isStart={isStart}
										isEnd={isEnd}></Node>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default PathFindingVisualizer;
