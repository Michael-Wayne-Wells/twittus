import twittusReducer from './../../src/reducers/twittus-reducer';

describe('twittusReducer', () => {

  let action;
  const sampleTwittusData = {
    author : 'steve',
    body : 'heyoooo',
    id: 0
  }
  test('Should return default state if no action type is recognized', () => {
    expect(twittusReducer({}, { type: null })).toEqual({});
  });

  test('Should succesfully add new twit to masterTwittusList', () => {
    const { author, body, id } = sampleTwittusData;
    action = {
      type: 'ADD_TWIT',
      author: author,
      body: body,
      id: id
    };
    expect(twittusReducer({}, action)).toEqual({
      [id] : {
        author: author,
        body: body,
        id: id
      }
    });
  });
});
