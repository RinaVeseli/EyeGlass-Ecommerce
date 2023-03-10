const Contact = require('./../model/contactModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getContacts = catchAsync(async (req, res, next) => {
  //Excecute Query
  const features = new APIFeatures(Contact.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const contacts = await features.query;
  //Send Response
  res.status(200).json({
    status: 'success',
    results: contacts.length,
    data: {
      contacts,
    },
  });
});

exports.getContact = catchAsync(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })

  if (!contact) {
    return next(new AppError('No contact found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      contact,
    },
  });
});

exports.createContact = catchAsync(async (req, res, next) => {
  const newContact = await Contact.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      contacts: newContact,
    },
  });
});

exports.updateContact = catchAsync(async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!contact) {
    return next(new AppError('No contact found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      contact,
    },
  });
});
exports.deleteContact = catchAsync(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    return next(new AppError('No contact found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
