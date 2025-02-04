/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:27.9930394-07:00

import { BlockEndState } from "./BlockEndState.ts";
import { DecisionState } from "./DecisionState.ts";
import { Override } from "../Decorators.ts";

/**  The start of a regular `(...)` block. */
export abstract class BlockStartState extends DecisionState {
	// This is always set during ATN deserialization
	public endState!: BlockEndState;
}
