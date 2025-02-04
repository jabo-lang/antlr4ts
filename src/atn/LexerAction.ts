/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:28.7973969-07:00

import { Equatable } from "../misc/Stubs.ts";
import { Lexer } from "../Lexer.ts";
import { LexerActionType } from "./LexerActionType.ts";

/**
 * Represents a single action which can be executed following the successful
 * match of a lexer rule. Lexer actions are used for both embedded action syntax
 * and ANTLR 4's new lexer command syntax.
 *
 * @author Sam Harwell
 * @since 4.2
 */
export interface LexerAction extends Equatable {
	/**
	 * Gets the serialization type of the lexer action.
	 *
	 * @returns The serialization type of the lexer action.
	 */
	//@NotNull
	readonly actionType: LexerActionType;

	/**
	 * Gets whether the lexer action is position-dependent. Position-dependent
	 * actions may have different semantics depending on the {@link CharStream}
	 * index at the time the action is executed.
	 *
	 * Many lexer commands, including `type`, `skip`, and
	 * `more`, do not check the input index during their execution.
	 * Actions like this are position-independent, and may be stored more
	 * efficiently as part of the `ATNConfig.lexerActionExecutor`.
	 *
	 * @returns `true` if the lexer action semantics can be affected by the
	 * position of the input {@link CharStream} at the time it is executed;
	 * otherwise, `false`.
	 */
	readonly isPositionDependent: boolean;

	/**
	 * Execute the lexer action in the context of the specified {@link Lexer}.
	 *
	 * For position-dependent actions, the input stream must already be
	 * positioned correctly prior to calling this method.
	 *
	 * @param lexer The lexer instance.
	 */
	execute(/*@NotNull*/ lexer: Lexer): void;
}
