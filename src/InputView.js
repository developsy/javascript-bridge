const MissionUtils = require("@woowacourse/mission-utils");
const { returnBridgeSize, returnGameCommand, returnMovingCommand } = require("./InputToValue");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handler) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (userInput) => {
      handler(userInput);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (userInput) => {
      handler(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (userInput) => {
      handler(userInput);
    });
  },
};

module.exports = InputView;
