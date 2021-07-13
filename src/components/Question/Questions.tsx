import React, {useEffect, useState} from 'react';
import {Firebase} from '../../models/Enums';
import {getDocuments} from '../firebase';
import {Question as questionModel} from '../../models/Game';
import {Spinner} from '../UI/Spinner';
import {Wrapper} from '../UI/Wrapper';
import styled from 'styled-components';

const Question = styled.div`
  margin: 1rem;
  padding: 1rem 3rem;
  background-color: rgba(0, 0, 0, .65);

  h2 {
    margin: .5rem;
    color: green;
  }

  h3 {
    text-align: center;
  }
`

export const Questions = () => {
    const [questions, setQuestions] = useState<Array<questionModel>>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        setLoading(true);
        const data = await getDocuments(Firebase.Questions);
        const fetchedQuestion: Array<questionModel> = []

        if (data) {
            data.forEach(doc => {
                const {id, answers, correctAnswer, question} = doc.data();
                let AnswersArr: any = []
                AnswersArr.push({id: 0, answer: answers[0]}, {id: 1, answer: answers[1]}, {id: 2, answer: answers[2]})

                fetchedQuestion.push({
                    id,
                    answers: AnswersArr,
                    correctAnswer,
                    question,
                })
            })
            setQuestions(fetchedQuestion)
        }
        setLoading(false)
    }

    const showFetchedQuestion = () => {
        return (
            <Wrapper>
                {loading ?
                    (<Spinner size='10'/>)
                    :
                    (
                        <div>
                            {questions.map(el =>
                                <Question key={el.id}>
                                    <h2>Q: {el.question}</h2>
                                    <h3>{el.answers[el.correctAnswer].answer}</h3>
                                </Question>
                            )}
                        </div>
                    )
                }
            </Wrapper>
        )
    }

    return (
        <>
            {showFetchedQuestion()}
        </>
    )
}