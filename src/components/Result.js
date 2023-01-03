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
        {props.quizResult == 'Army' ?
          <p>သင်သည် ကိုယ့်ကိုပြန်သတ်ဖို့ လက်နက်ဝယ်မယ့် စစ်ကောင်စီထုတ်ကုန်တွေကို ဝယ်ယူအားပေးနေပါတယ်။</p>
          :
          <p>သင်သည်စစ်တပ်ထုတ်ကုန်ငြင်းဆန်ပြည်သူဘက်တော်သားသူရဲကောင်းတစ်ယောက်ဖြစ်ပါတယ်။</p>
        }
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
