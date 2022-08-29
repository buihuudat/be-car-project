import React from 'react'
import mongoose from 'mongoose'
const ExpertPeople = new mongoose({
  img: String,
  title: 'String',
  subtitle: 'String'
})

module.exports = mongoose.model('ExpertPeople', ExpertPeople)