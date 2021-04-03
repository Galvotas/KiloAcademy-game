export enum ActionTypes {
  /// BOARD_STATE actions describes overall data that's being taken from /board endpoint

  BOARD_STATE_PENDING = "BOARD_STATE_PENDING",
  BOARD_STATE_SUCCESS = "BOARD_STATE_SUCCESS",
  BOARD_STATE_ERROR = "BOARD_STATE_ERROR",

  /// BOARD_STATUS actions describes overall status that's being taken from /board/status

  BOARD_STATUS_PENDING = "BOARD_STATUS_PENDING",
  BOARD_STATUS_SUCCESS = "BOARD_STATUS_SUCCESS",
  BOARD_STATUS_ERROR = "BOARD_STATUS_ERROR",
}
