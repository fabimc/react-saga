/*
 * ForexConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_BASE = 'boilerplate/Forex/CHANGE_BASE'
export const LOAD_RATES = 'boilerplate/Forex/LOAD_RATES'
export const LOAD_RATES_SUCCESS = 'boilerplate/Forex/LOAD_RATES_SUCCESS'
export const LOAD_RATES_ERROR = 'boilerplate/Forex/LOAD_RATES_ERROR'
