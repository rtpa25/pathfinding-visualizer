import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleIsMouseDown } from "../../store/slices/isMouseDownSlice";
import { setNodeAsWall } from "../../store/slices/nodeSlice";
import "./Node.css";

interface NodeProps {
	isStart: boolean;
	isEnd: boolean;
	row: number;
	col: number;
}

const Node: FC<NodeProps> = ({ isStart, isEnd, row, col }) => {
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
					dispatch(setNodeAsWall({ col, row }));
					setIsWall((prevState) => {
						return !prevState;
					});
				}
			}}
			className={`node ${isPointer} ${isWallClassName}`}></div>
	);
};

export default Node;
