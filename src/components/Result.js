import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        {props.quizResult === 'Army' ?
          <p>ဝင်ရောက်ဖြေဆိုပေးမှုအတွက် ကျေးဇူးအထူးတင်ပါတယ်။ သင့်အား စစ်တပ်ထုတ်ကုန်များကို ငြင်းဆန်တဲ့ တော်လှန်ရေးဘက်တော်သား သူရဲကောင်းအဖြစ် မှတ်တမ်းတင်ဂုဏ်ပြုအပ်ပါတယ်။</p>
          :
          <p>ဝင်ရောက်ဖြေဆိုမှုအတွက် ကျေးဇူးအထူးတင်ပါတယ်။ သင့်အနေနဲ့ စစ်တပ်ထုတ်ကုန်များကို သပိတ်မှောက်ရှောင်ရှားပေးဖို့ တိုက်တွန်းအပ်ပါတယ်။</p>
        }
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
