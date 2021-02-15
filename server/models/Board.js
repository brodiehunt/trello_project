const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Board = new Schema({
  // each board has a title and create date
  title: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  // each board has multiple to-do lists with a title and create date and cards
  todos: [{
    title: {
      type: String,
      required: true
    },
    create_date: {
      type: Date,
      required: true,
      default: Date.now
    },
    // each to-do list can have cards which have a title, create date, due_date, urgency, description, and a checklist
    cards: [{
      title: {
        type: String,
        required: true
      },
      create_date: {
        type: Date,
        required: true,
        default: Date.now
      },
      due_date: {
        type: Date,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      urgent: {
        type: Boolean,
        required: false
      },
      // each checklist within a card must have a title and optional items with a completed status. 
      checkList: {
        title: {
          type: String,
          required: true
        },
        items: [{
          description: {
            type: String,
            required: false,
          },
          completed: {
            type: Boolean,
            required: true,
            default: false
          }
        }]
      }
    }]
  }]
});

module.exports = mongoose.model('Board', Board)
