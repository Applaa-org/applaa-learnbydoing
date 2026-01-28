const API_URL = 'https://haix.ai/api';
const TABLE_SUFFIX = 'lbd_x9k2m1p4';

export interface UserProgress {
  id?: number;
  user_id: string;
  activity_id: string;
  completed: boolean;
  score: number;
  created_at?: string;
}

export async function saveProgress(progress: UserProgress): Promise<UserProgress> {
  const response = await fetch(`${API_URL}/progress_${TABLE_SUFFIX}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(progress),
  });
  if (!response.ok) throw new Error('Failed to save progress');
  return response.json();
}

export async function getProgress(userId: string): Promise<UserProgress[]> {
  const response = await fetch(`${API_URL}/progress_${TABLE_SUFFIX}?user_id=${userId}`);
  if (!response.ok) throw new Error('Failed to fetch progress');
  return response.json();
}