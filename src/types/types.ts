export enum ColumnType {
    BACKLOG = "Backlog",
    READY = "Ready",
    IN_PROGRESS = "In progress",
    FINISHED = "Finished",
}

export interface Task {
    id: string,
    title: string,
    description: string,
    status: ColumnType;
}

