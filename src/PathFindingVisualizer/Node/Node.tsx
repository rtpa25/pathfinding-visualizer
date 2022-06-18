import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleIsMouseDown } from "../../store/slices/isMouseDownSlice";
import { GraphNode } from "../../types";
import "./Node.css";

const Node: FC<GraphNode> = ({ isStart, isEnd }) => {
	const isPointer = isStart ? "node-start" : isEnd && "node-finish";
	const [isWall, setIsWall] = useState<boolean>(false);
	const isMouseDown = useAppSelector((state) => state.isMouseDown.value);
	const dispatch = useAppDispatch();
	const isWallClassName = isWall && "wall-node";

	return (
		<div
			onMouseDown={() => dispatch(toggleIsMouseDown())}
			onMouseEnter={() => {
				if (isMouseDown && !(isStart || isEnd)) {
					setIsWall((prevState) => {
						return !prevState;
					});
				}
			}}
			className={`node ${isPointer} ${isWallClassName}`}></div>
	);
};

export default Node;
