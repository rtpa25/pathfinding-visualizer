import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { generateNodes } from "../store/slices/nodeSlice";
import { GraphNode } from "../types";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

const PathFindingVisualizer = () => {
	const nodes = useAppSelector((state) => state.nodes.value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(generateNodes());
	}, [dispatch]);

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
										isEnd={isEnd}
										row={rowIdx}
										col={nodeIdx}></Node>
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
