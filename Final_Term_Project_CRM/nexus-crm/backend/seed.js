require('dotenv').config();
const mongoose = require('mongoose');
const Customer = require('./models/Customer');

const customers = [
  { name: 'Aisha Khan', email: 'aisha@techcorp.io', phone: '+92-300-1111001', company: 'TechCorp', address: 'Islamabad', status: 'Active', notes: 'Key enterprise client' },
  { name: 'James Miller', email: 'james@startup.co', phone: '+1-415-5550001', company: 'StartupCo', address: 'San Francisco', status: 'Lead', notes: 'Interested in premium plan' },
  { name: 'Sofia Reyes', email: 'sofia@designio.com', phone: '+52-55-5550002', company: 'DesignIO', address: 'Mexico City', status: 'Active', notes: 'UI/UX agency client' },
  { name: 'Omar Patel', email: 'omar@globalfin.com', phone: '+971-50-5550003', company: 'GlobalFin', address: 'Dubai', status: 'Inactive', notes: 'Contract expired' },
  { name: 'Lily Chen', email: 'lily@nexacloud.io', phone: '+86-138-5550004', company: 'NexaCloud', address: 'Shanghai', status: 'Lead', notes: 'Interested in cloud services' },
  { name: 'Ahmed Hassan', email: 'ahmed@webworks.pk', phone: '+92-321-5550005', company: 'WebWorks', address: 'Lahore', status: 'Active', notes: 'Long-term client since 2020' },
  { name: 'Emma Wilson', email: 'emma@brightmedia.co', phone: '+44-7700-5550006', company: 'BrightMedia', address: 'London', status: 'Active', notes: 'Media campaign client' },
  { name: 'Carlos Gomez', email: 'carlos@infosec.mx', phone: '+52-33-5550007', company: 'InfoSec MX', address: 'Guadalajara', status: 'Lead', notes: 'Security audit potential' },
  { name: 'Priya Sharma', email: 'priya@datawise.in', phone: '+91-98765-50008', company: 'DataWise', address: 'Bangalore', status: 'Active', notes: 'Data analytics client' },
  { name: 'Lucas Becker', email: 'lucas@bauhaus.de', phone: '+49-30-5550009', company: 'Bauhaus GmbH', address: 'Berlin', status: 'Active', notes: 'Architecture firm' },
  { name: 'Fatima Al-Rashid', email: 'fatima@arabian.ae', phone: '+971-4-5550010', company: 'Arabian Tech', address: 'Abu Dhabi', status: 'Lead', notes: 'Government project inquiry' },
  { name: 'Noah Johnson', email: 'noah@pixellab.us', phone: '+1-212-5550011', company: 'PixelLab', address: 'New York', status: 'Active', notes: 'Creative agency' },
  { name: 'Yuki Tanaka', email: 'yuki@zentech.jp', phone: '+81-3-5550012', company: 'ZenTech JP', address: 'Tokyo', status: 'Active', notes: 'Robotics startup' },
  { name: 'Isabella Rossi', email: 'isabella@moda.it', phone: '+39-02-5550013', company: 'Moda Italia', address: 'Milan', status: 'Inactive', notes: 'Seasonal client' },
  { name: 'Tariq Mahmood', email: 'tariq@smartbiz.pk', phone: '+92-333-5550014', company: 'SmartBiz PK', address: 'Karachi', status: 'Lead', notes: 'Startup looking for CRM' },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Customer.deleteMany({});
  await Customer.insertMany(customers);
  console.log('✅ 15 customers seeded!');
  process.exit();
});