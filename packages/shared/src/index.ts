export type WorkspaceType = 'company' | 'management' | 'personal' | 'external';

export interface Workspace {
  id: string;
  name: string;
  type: WorkspaceType;
  description?: string | null;
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  status: 'active' | 'paused' | 'done' | 'archived';
}

export interface Task {
  id: string;
  projectId?: string | null;
  workspaceId: string;
  title: string;
  status: 'todo' | 'doing' | 'done';
  dueAt?: string | null;
}
