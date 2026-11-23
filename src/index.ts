import app from './server';
import { PORT } from './constants';

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
