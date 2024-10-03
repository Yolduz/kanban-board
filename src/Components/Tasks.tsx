import { Task } from "../types/types";

export function Tasks({id, title, status, description}: Task) {
    return (
        <div className="taks-item">{title}</div>
    )
}