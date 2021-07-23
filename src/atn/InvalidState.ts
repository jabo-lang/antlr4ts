/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

import { ATNState } from "./ATNState.ts";
import { ATNStateType } from "./ATNStateType.ts";
import { BasicState } from "./BasicState.ts";
import { Override } from "../Decorators.ts";

/**
 *
 * @author Sam Harwell
 */
export class InvalidState extends BasicState {

	@Override
	get stateType(): ATNStateType {
		return ATNStateType.INVALID_TYPE;
	}

}
