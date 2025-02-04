/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:28.1575933-07:00

import { DecisionEventInfo } from "./DecisionEventInfo.ts";
import { NotNull } from "../Decorators.ts";
import { SimulatorState } from "./SimulatorState.ts";
import { TokenStream } from "../TokenStream.ts";

/**
 * This class represents profiling event information for a context sensitivity.
 * Context sensitivities are decisions where a particular input resulted in an
 * SLL conflict, but LL prediction produced a single unique alternative.
 *
 * In some cases, the unique alternative identified by LL prediction is not
 * equal to the minimum represented alternative in the conflicting SLL
 * configuration set. Grammars and inputs which result in this scenario are
 * unable to use {@link PredictionMode#SLL}, which in turn means they cannot use
 * the two-stage parsing strategy to improve parsing performance for that
 * input.
 *
 * @see ParserATNSimulator#reportContextSensitivity
 * @see ParserErrorListener#reportContextSensitivity
 *
 * @since 4.3
 */
export class ContextSensitivityInfo extends DecisionEventInfo {
	/**
	 * Constructs a new instance of the {@link ContextSensitivityInfo} class
	 * with the specified detailed context sensitivity information.
	 *
	 * @param decision The decision number
	 * @param state The final simulator state containing the unique
	 * alternative identified by full-context prediction
	 * @param input The input token stream
	 * @param startIndex The start index for the current prediction
	 * @param stopIndex The index at which the context sensitivity was
	 * identified during full-context prediction
	 */
	constructor(
		decision: number,
		@NotNull state: SimulatorState,
		@NotNull input: TokenStream,
		startIndex: number,
		stopIndex: number) {

		super(decision, state, input, startIndex, stopIndex, true);
	}
}
