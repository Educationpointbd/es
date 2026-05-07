/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameCanvas } from './components/GameCanvas';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      <GameCanvas />
    </div>
  );
}
