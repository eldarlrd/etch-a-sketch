/**
 * @license AGPL-3.0-only
 * Etch A Sketch - A Digital Etch A Sketch
 * Copyright (C) 2023-2024 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Etch A Sketch.
 *
 * Etch A Sketch is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Etch A Sketch is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Etch A Sketch. If not, see <https://www.gnu.org/licenses/>.
 */

import { render } from 'preact';

import { App } from '@/app.tsx';

const app = document.getElementById('app');
if (app) render(<App />, app);
