const datas = [{
  Categories: 'Participants', 'First Name': 'JUNAIDU', 'Last Name': 'SALISU', Email: 'basarakej@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad ', 'Last Name': 'Shehu', Email: 'shehum051@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria ', Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Maimunat ', 'Last Name': 'Ibrahim ', Email: 'maimunatbrhm58@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Solomon', 'Last Name': 'Ekundayo', Email: 'ekundayosolomon10@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Rodney', 'Last Name': 'Ighalo', Email: 'rawstonner@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulhamid', 'Last Name': 'Musa', Email: 'musamaloo33@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello university', Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Shuaibu ', 'Last Name': 'Kamilu ', Email: 'shuaibukamilushuaibu@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmad', 'Last Name': 'Shuaibu', Email: 'arsringim@gmail.com', 'Institutional Affiliation': null, Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar', 'Last Name': "Muhammad Ma'aji", Email: 'abubakarmuhammadmaaji83@gmail.com', 'Institutional Affiliation': 'Software Engineering', Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar', 'Last Name': "Muhammad Ma'aji", Email: 'abubakarmuhammadmaaji83@gmail.com', 'Institutional Affiliation': 'Software Engineering', Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Israel ', 'Last Name': 'Edet ', Email: 'isreal.edet11@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T06:06:58.253Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hussaini', 'Last Name': 'Muhammad Adam', Email: 'hussaini.ma30@gmail.com', 'Institutional Affiliation': 'ADDA Girl Education Foundation ', Date: '2022-09-25T06:58:24.585Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Yakubu', Email: 'ibrahimy437@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T08:02:26.422Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aminu ', 'Last Name': 'Ibrahim ', Email: 'aminuibrahimbaballe@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T08:57:19.535Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Jafaru ', 'Last Name': 'Sani', Email: 'jasynoble@gmail.com', 'Institutional Affiliation': 'Dialogue Computer Institute ', Date: '2022-09-25T08:57:21.956Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Aminu ', 'Last Name': 'Ibrahim ', Email: 'aminuibrahimbaballe@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T08:57:46.076Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aminu ', 'Last Name': 'Ibrahim ', Email: 'aminuibrahimbaballe@gmail.com', 'Institutional Affiliation': 'Any', Date: '2022-09-25T08:58:44.819Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kaboji ', 'Last Name': 'Muhammad ', Email: 'rahmatkaboji345@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T12:53:16.014Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abbas ', 'Last Name': 'Abdullahi Abbas', Email: 'abekuabbas9@gmail.com', 'Institutional Affiliation': 'Al-qalam University  Katsina', Date: '2022-09-25T13:47:40.014Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Saurabh', 'Last Name': 'Parmar', Email: 'saurabhparmar.leedsoffice@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T14:15:37.956Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'LawalIdris', Email: 'ibrahimlawalidris@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T14:22:44.501Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Kingsley', 'Last Name': 'Osuji', Email: 'kingsleyc05@gmail.com', 'Institutional Affiliation': 'Appen Global', Date: '2022-09-25T14:50:53.411Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kingsley', 'Last Name': 'Osuji', Email: 'kingsleyc05@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-25T14:51:33.528Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Peter', 'Last Name': 'Inyang', Email: 'peter.inyang@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T15:20:37.886Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aisha', 'Last Name': 'Lawal', Email: 'aishalawaliyatawa@gmail.com', 'Institutional Affiliation': 'Master class registration', Date: '2022-09-25T15:48:30.862Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Victor', 'Last Name': 'Bala', Email: 'savicsly@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T16:19:23.069Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hamisu', 'Last Name': 'Abdullahi ', Email: 'hamzyabdallah5@gmail.com', 'Institutional Affiliation': 'Nigeria institute of leather and science technology zaria', Date: '2022-09-25T17:45:06.351Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusuf', 'Last Name': 'Yunusa Riko', Email: 'yusufyunusariko@gmail.com', 'Institutional Affiliation': 'Umaru Musa Yaradua University Katsina', Date: '2022-09-25T22:11:02.869Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman ', 'Last Name': 'Adamu Adamu ', Email: 'adamibb400@gmail.com', 'Institutional Affiliation': 'IMAP Polytechnic ', Date: '2022-09-25T22:41:46.611Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi ', 'Last Name': 'Abubakar Maina ', Email: 'aabdullahimaina@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-25T22:50:35.117Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aisha', 'Last Name': 'Lawal', Email: 'zainablawal4030@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T07:00:12.105Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Gospel', 'Last Name': 'Nzigha', Email: 'Raynzigha@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T08:18:00.816Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hussaina', 'Last Name': 'Sani-Sambo', Email: 'Hussaina.sambo@kdsg.gov.ng', 'Institutional Affiliation': '', Date: '2022-09-26T08:59:40.405Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bello', 'Last Name': 'Mele', Email: 'bmele@nitda.gov.ng', 'Institutional Affiliation': '', Date: '2022-09-26T09:18:53.185Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Nneoma', 'Last Name': 'Ofodile', Email: 'nneoma@ieee.org', 'Institutional Affiliation': '', Date: '2022-09-26T09:45:23.829Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad ', 'Last Name': 'Shehu', Email: 'shehum051@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria ', Date: null, 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'BABAJIDE', 'Last Name': 'AJAYI', Email: 'ajayijide2000@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-26T09:59:17.742Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Wunmi', 'Last Name': 'Hassan', Email: 'reachaoh@yahoo.co.uk', 'Institutional Affiliation': '', Date: '2022-09-26T10:01:29.275Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nneoma ', 'Last Name': 'Ofodile ', Email: 'nneoma@ieee.org', 'Institutional Affiliation': '', Date: '2022-09-26T10:09:07.302Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Uzo', 'Last Name': 'Ndidigwe', Email: 'info@digitalafrica.com.ng', 'Institutional Affiliation': 'Digital Africa ', Date: '2022-09-26T10:10:10.031Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Nneoma ', 'Last Name': 'Ofodile ', Email: 'nneomaofodile@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-26T10:20:28.931Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Michael ', 'Last Name': 'Alaribe ', Email: 'michaelalaribe123@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T10:47:35.337Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hassanat', 'Last Name': 'Bello', Email: 'hassanat.balogun@kwasu.edu.ng', 'Institutional Affiliation': '', Date: '2022-09-26T10:57:00.763Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Emmanuel ', 'Last Name': 'Anikweze ', Email: 'eanikweze@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T11:13:40.288Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aliyu', 'Last Name': 'Ahmad', Email: 'aliyuahmad775@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T13:10:13.892Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Jabir ', 'Last Name': 'Jabir  Abdullahi', Email: 'jabeerabdullahi298@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria ', Date: '2022-09-26T15:58:18.248Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Yakubu', Email: 'ibrahimy437@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T16:56:16.031Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Alkasim', 'Last Name': 'Alhassan', Email: 'alkasimalhassan150@gmail.com', 'Institutional Affiliation': 'Abubakar Tafawa Balewa University, BAUCHI', Date: '2022-09-26T20:21:55.299Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bilyaminu', 'Last Name': 'Aliyu Umar', Email: 'bilyaaliyu001@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T21:22:30.052Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bilyaminu', 'Last Name': 'Aliyu Umar', Email: 'bilyaaliyu001@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T21:23:15.625Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bilyaminu', 'Last Name': 'Aliyu ', Email: 'bilyaaliyu001@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-26T21:26:42.597Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'MUHAMMAD MAHI', 'Last Name': 'MUHAMMAD', Email: 'donmahi2036@gmail.com', 'Institutional Affiliation': 'Kaduna polytechnic', Date: '2022-09-27T18:10:02.494Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Yakubu', Email: 'ibrahimy437@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-27T18:19:14.102Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar Muhammad', 'Last Name': 'Abdullahi', Email: 'mambulangu2011@gmail.com', 'Institutional Affiliation': 'BUK', Date: '2022-09-27T18:47:14.216Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abubakar Muhammad', 'Last Name': 'Abdullahi', Email: 'mambulangu2011@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-27T18:51:11.927Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'UMAR', 'Last Name': 'LAWAN AHMAD', Email: 'Umarlawanahmad99@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-27T19:37:01.438Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Abdulmalik', 'Last Name': 'Adeyemo', Email: 'abdulmalikadeyemo@outlook.com', 'Institutional Affiliation': '', Date: '2022-09-27T21:34:49.400Z', 'Company\/Organization': 'National Center for Artificial Intelligence and Robotics',
}, {
  Categories: 'Participants', 'First Name': 'Tijjani', 'Last Name': 'Ali', Email: 'tijjanali@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-27T22:40:37.041Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad Mukhtar', 'Last Name': 'Umar', Email: 'mukhtarumar028@gmail.com', 'Institutional Affiliation': 'Federal University Dutse, Jigawa State.', Date: '2022-09-28T00:02:52.722Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrazaq', 'Last Name': 'Adamu', Email: 'abdulrazakadamu2016@gmail.com', 'Institutional Affiliation': 'Jigawa State Polythecnic Dutse', Date: '2022-09-28T00:20:44.078Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Gopep', 'Last Name': 'Shidonna James', Email: 'gopep2015@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T06:01:54.132Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Gopep', 'Last Name': 'Shidonna James', Email: 'gopep2015@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T06:02:08.084Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Gopep', 'Last Name': 'Gopep James', Email: 'gopep2015@gmail.com', 'Institutional Affiliation': 'Code Plateau', Date: '2022-09-28T06:02:48.948Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Gopep', 'Last Name': 'Shidonna James', Email: 'gopep2015@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T06:03:15.814Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jesse', 'Last Name': 'Ayuba', Email: 'Jesseayuba@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T06:20:40.187Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Stephen', 'Last Name': 'Peter', Email: 'stephenpeter2@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T06:58:18.567Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ABUBAKAR', 'Last Name': 'ALI ESE', Email: 'abubakaraliese@gmail.com', 'Institutional Affiliation': 'ESE COMPUTER AND WEB DESIGN', Date: '2022-09-28T07:27:02.773Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Wilson', 'Last Name': 'Dagah', Email: 'wdagah14@gmail.com', 'Institutional Affiliation': 'Afe Babalola University', Date: '2022-09-28T07:40:16.115Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Gino', 'Last Name': 'Osahon', Email: 'gino.osahon@iovlabs.org', 'Institutional Affiliation': 'IOV Labs', Date: '2022-09-28T07:41:10.354Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Victor', 'Last Name': 'Dafilip', Email: 'victordafilip1121@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T07:47:00.930Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Dinfa', 'Last Name': 'Dashe', Email: 'dinfadashe@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T08:08:13.982Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Nden. Christopher', 'Last Name': 'Lohnan', Email: 'christden10faithfoundation@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T08:22:09.915Z', 'Company\/Organization': 'Christden10 faith Foundation Multipurpose society organizations',
}, {
  Categories: 'Participants', 'First Name': 'Bright Arenious', 'Last Name': 'Samuel', Email: 'leshaksattong96@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T08:34:07.288Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Benjamin', 'Last Name': 'Dakyap', Email: 'dakyapbenjamin@gmail.com', 'Institutional Affiliation': 'University of Jos', Date: '2022-09-28T09:24:31.576Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Murtala', 'Last Name': 'Lawan', Email: 'murtalankazaure@gmail.com', 'Institutional Affiliation': 'Reconnect Jigawa Initiative', Date: '2022-09-28T09:37:56.417Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Usman', 'Last Name': 'Sanusi', Email: 'usanusi96@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T09:49:09.434Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hussein', 'Last Name': 'Bello', Email: 'bellohusseinadeiza@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T10:33:07.676Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mubarak', 'Last Name': 'Ibrahim', Email: 'imubarak2424@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T10:39:16.823Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nazifi Shehu', 'Last Name': 'Badawi', Email: 'nazeefbadawee6@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T11:37:33.283Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nazifi Shehu', 'Last Name': 'Badawi', Email: 'nazeefbadawee6@gmail.com', 'Institutional Affiliation': 'Kano University Of Science And Technology Wudil', Date: '2022-09-28T11:43:38.500Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nancy', 'Last Name': 'Muorah', Email: 'nanamuorah@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T12:09:03.156Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Umar', Email: 'onucheumar@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T12:32:54.778Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Umar', Email: 'onucheumar@yahoo.com', 'Institutional Affiliation': 'Chainlink', Date: '2022-09-28T12:34:13.405Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'john', 'Last Name': 'moses', Email: 'johnmoses704@gmail.com', 'Institutional Affiliation': 'University of Agriculture', Date: '2022-09-28T13:05:47.100Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mayokun', 'Last Name': 'Adeoti', Email: 'mayokun@startupgrind.com', 'Institutional Affiliation': '', Date: '2022-09-28T13:11:51.323Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar', 'Last Name': 'Sadiq', Email: 'omarwdl@gmail.com', 'Institutional Affiliation': 'Nigerian Ports Authority', Date: '2022-09-28T14:08:52.552Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Khalid', Email: 'muhammedkhaleed360@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:25:29.746Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aliyu', 'Last Name': 'Ibrahim', Email: 'khaleedole@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:26:32.821Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Khalid', Email: 'muhammedkhaleed360@gmail.com', 'Institutional Affiliation': 'Fudma kastina', Date: '2022-09-28T14:27:19.367Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliyu', 'Last Name': 'Ibrahim', Email: 'khaleedole@gmail.com', 'Institutional Affiliation': 'Kasu kaduna', Date: '2022-09-28T14:27:43.606Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Usman', 'Last Name': 'Usman', Email: 'Uthmanibraheemfirji@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:38:26.662Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sule-iko', 'Last Name': 'Sadeeq sami', Email: 'sssuleiko@gmail.com', 'Institutional Affiliation': 'Shukhrahman transnational limited', Date: '2022-09-28T14:40:55.659Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Albasu', 'Last Name': 'Babale Shuaibu', Email: 'bsalbasu@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:41:44.458Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Maniru Malami', 'Last Name': 'Umar', Email: 'maniru.umar@udusok.edu.ng', 'Institutional Affiliation': 'Usmanu Danfodiyo University Sokoto', Date: '2022-09-28T14:41:49.352Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sulaiman', 'Last Name': 'Lawan', Email: 'sulaimanlawan@gmail.com', 'Institutional Affiliation': 'Sulfidone', Date: '2022-09-28T14:46:12.440Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Sulaiman Musa', 'Last Name': 'Sulaiman', Email: 'sulaimanmusa17@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:48:46.704Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Babangida Kani', Email: 'bkebraheem@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:51:13.223Z', 'Company\/Organization': 'Spendoware',
}, {
  Categories: 'Participants', 'First Name': 'Aliyu', 'Last Name': 'Ahmadu', Email: 'engr.ahmadtee4lyf@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:52:41.138Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliyu', 'Last Name': 'Ahmadu', Email: 'engr.ahmadtee4lyf@gmail.com', 'Institutional Affiliation': 'Nsuk', Date: '2022-09-28T14:53:12.226Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulrahman', 'Last Name': 'Shehu', Email: 'shehuabdulrahman5@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:53:18.684Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Rabiu', 'Last Name': 'Alhaji Talle', Email: 'rabiupro43@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:57:41.640Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Lawal Aminu', 'Last Name': 'Bala', Email: 'labrimi84@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T14:58:27.285Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Usman', 'Last Name': 'Bello', Email: 'usmanbelloa@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:03:55.423Z', 'Company\/Organization': 'Bitkova Academy',
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'Bashir', Email: 'abdulmalikbashir017@gmail.com', 'Institutional Affiliation': 'Kano university of science and technology Wudil Kano state', Date: '2022-09-28T15:06:22.953Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Alkasim', 'Last Name': 'Alhassan', Email: 'alkasimalhassan150@gmail.com', 'Institutional Affiliation': 'Abubakar Tafawa Balewa University, BAUCHI', Date: '2022-09-28T15:06:55.137Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi', 'Last Name': 'Usman', Email: 'mniceabdull@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:07:54.850Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Abdulrahman', Email: 'dizafraan@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:09:52.176Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Danlami', Email: 'Ibrahimdanlami20@gmail.com', 'Institutional Affiliation': 'ibrahimdanlami20@gmail.com', Date: '2022-09-28T15:10:35.490Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yahaya', 'Last Name': 'Idris', Email: 'yahayaidris2468@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:11:14.079Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'AHMED', 'Last Name': 'LAWAN', Email: 'alhajibaffa44@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:14:13.539Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Danlami', Email: 'ibrahimdanlami20@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:16:14.840Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar', 'Last Name': 'Badamasi', Email: 'cerdeeq2u@gmail.com', 'Institutional Affiliation': 'National Information Technology Development Agency', Date: '2022-09-28T15:16:19.086Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Rabiu', Email: 'alhibb01@gmail.com', 'Institutional Affiliation': 'Bin Hussain School of Computing and Technologies', Date: '2022-09-28T15:20:39.596Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'IBRAHIM', 'Last Name': 'RABIU', Email: 'alhibb01@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:21:37.915Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Inuwa', 'Last Name': 'Abdurrahman', Email: 'inuwaaliman@gmail.com', 'Institutional Affiliation': 'Binyaminu Usman Polytechnic Hadejia', Date: '2022-09-28T15:25:08.265Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'IBRAHIM', 'Last Name': 'MUHAMMAD mk', Email: 'ibrahimmkhdj2@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:22:50.995Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aminu', 'Last Name': 'Hashim', Email: 'aminuhashim14@gmail.com', 'Institutional Affiliation': 'Kano University of Science and Technology Wudil, Knao', Date: '2022-09-28T15:25:53.876Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Suleiman', 'Last Name': 'Ai Bunawa', Email: 'abbunawa96@gmail.com', 'Institutional Affiliation': 'Bayero University Kano', Date: '2022-09-28T15:26:40.350Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jibril Aliyu', 'Last Name': 'Maikwarya', Email: 'jibrilaliyu942@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:28:02.522Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Chioma', 'Last Name': 'Onyekelu', Email: 'Chioma.onyekelu@adforensics.com.ng', 'Institutional Affiliation': '', Date: '2022-09-28T15:31:34.244Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sule', 'Last Name': 'Inusa', Email: 'alhajisule66@gmail.com', 'Institutional Affiliation': 'Students', Date: '2022-09-28T15:33:47.935Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'IBRAHIM', 'Last Name': 'NASIR', Email: 'ibmdnass@gmail.com', 'Institutional Affiliation': 'Kano University of Science and Technology, KUST WUDIL', Date: '2022-09-28T15:34:42.316Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusuf', 'Last Name': 'Abdullahi', Email: 'yusufabdulluba@gmail.com', 'Institutional Affiliation': 'Bitkova academy', Date: '2022-09-28T15:35:47.185Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hassan', 'Last Name': 'Muhammad', Email: 'hassanelfaith@gmail.com', 'Institutional Affiliation': 'Informatics', Date: '2022-09-28T15:42:25.664Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Gabriel', 'Last Name': 'Eze', Email: 'gabriel@infusionlawyers.com', 'Institutional Affiliation': 'Infusion Lawyers', Date: '2022-09-28T15:44:00.535Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Ahmad', Email: 'abdulll8392@gmail.com', 'Institutional Affiliation': 'Institute of Computing and information Communication technology Ahmadu Bello University Zaria', Date: '2022-09-28T15:55:28.670Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Zubairu', Email: 'muhdzubairuahmad@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T15:57:33.838Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ESTHER', 'Last Name': 'KIPIR', Email: 'estherkipir220@gmail.com', 'Institutional Affiliation': 'NBS', Date: '2022-09-28T15:58:13.935Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sagir muktar', 'Last Name': 'ali', Email: 'alisagirmuktar@gmail.com', 'Institutional Affiliation': 'Abubakar Tafawa Balewa University, Bauchi', Date: '2022-09-28T16:10:14.443Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bala', 'Last Name': 'Aliyu', Email: 'balaaliyu96@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:25:12.029Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi Abbas', 'Last Name': 'Adam', Email: 'abbasabdullah71@yahoo.com', 'Institutional Affiliation': 'Al-Qalam University Katsina', Date: '2022-09-28T16:29:26.928Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad Sharhabilu', 'Last Name': 'Lawan', Email: 'sharhabillawan@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:43:33.756Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Daniel Felix', 'Last Name': 'Lawal', Email: 'phelixwale@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria', Date: '2022-09-28T16:48:20.730Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Daniel Felix', 'Last Name': 'Lawal', Email: 'phelixwale@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:49:48.581Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kabiru', 'Last Name': 'Lawal', Email: 'kbjarmai@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:53:42.049Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jamaldeen', 'Last Name': 'Akanbi', Email: 'jamaldeenakanbi@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:55:13.415Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Manir', 'Last Name': 'Suleiman', Email: 'ask4manir@gmail.com', 'Institutional Affiliation': 'Umaru Ali Shinkafi Polytechnic Sokoto', Date: '2022-09-28T16:56:26.548Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'nuraharuna103@gmail.com', 'Last Name': 'Haruna', Email: 'nuraharuna103@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T16:59:02.500Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Nura', 'Last Name': 'Haruna', Email: 'maikarfefuntua@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:00:36.856Z', 'Company\/Organization': 'Maikarfe Global Services',
}, {
  Categories: 'Participants', 'First Name': 'IDRIS', 'Last Name': 'Sulaiman Abba', Email: 'Idrissulaiman1109@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:12:04.821Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bello', 'Last Name': 'Abdullahi', Email: 'abdullahibellog@outlook.com', 'Institutional Affiliation': 'Ahmadu Bello University, Zaria.', Date: '2022-09-28T17:13:54.585Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aliu', 'Last Name': 'Toheeb Olaitan', Email: 'iamaliutoheeb@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:20:55.595Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliu', 'Last Name': 'Toheeb Olaitan', Email: 'iamaliutoheeb@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University', Date: '2022-09-28T17:21:38.036Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Faisal', 'Last Name': 'Umar', Email: 'umarfaisal030@gmail.com', 'Institutional Affiliation': 'University', Date: '2022-09-28T17:24:34.207Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bello', 'Last Name': 'Mande', Email: 'ibadahson98@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria', Date: '2022-09-28T17:24:55.694Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faisal', 'Last Name': 'Umar', Email: 'umarfaisal030@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:25:06.237Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Saifullah', 'Last Name': 'Abdulkadir', Email: 'saifullahmuhammad6107@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:43:32.021Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Idriss', 'Last Name': 'Adamu', Email: 'idrissadamu52@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:46:21.215Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aisha', 'Last Name': 'Ibrahim Musa', Email: 'aishasheikh889@gmail.com', 'Institutional Affiliation': 'National Emergency Management Agency', Date: '2022-09-28T17:49:08.648Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ahmad', 'Last Name': 'Ibrahim Musa', Email: 'aishasheikh889@gmail.com', 'Institutional Affiliation': 'Youth Corper', Date: '2022-09-28T17:50:22.707Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aisha', 'Last Name': 'Ibrahim Musa', Email: 'aishasheikh889@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:56:38.561Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmad', 'Last Name': 'Ibrahim Musa', Email: 'aishasheikh889@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T17:56:54.987Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliyu', 'Last Name': 'Muhammad', Email: 'Aleeyu1909@gmail.com', 'Institutional Affiliation': 'Bitkova Academy Kano', Date: '2022-09-28T17:58:40.394Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Oluwafemi', 'Last Name': 'Adenugba', Email: 'femi2adenugba@gmail.com', 'Institutional Affiliation': 'University of Abuja', Date: '2022-09-28T18:01:12.603Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Oluwafemi', 'Last Name': 'Adenugba', Email: 'mcfemi6@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T18:02:31.934Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad Imam', 'Last Name': 'Bello', Email: 'imam.bello@projectsupport.com.ng', 'Institutional Affiliation': '', Date: '2022-09-28T18:09:17.071Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Idris', 'Last Name': 'Salisu', Email: 'idrissalisu090@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University', Date: '2022-09-28T18:20:56.755Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Rabiu', 'Last Name': 'Rabiu', Email: 'dactar97@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T18:23:11.960Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'UMAR', 'Last Name': 'SALEH', Email: 'autasalehgiwa@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T18:25:38.288Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Muhammad Yunus', 'Last Name': 'Musa', Email: 'mwhy_myhoolar@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T18:41:36.599Z', 'Company\/Organization': 'STEM Club Project Africa',
}, {
  Categories: 'Participants', 'First Name': 'Aminu Bin', 'Last Name': 'Ibrahim', Email: 'aboutaminu@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T18:48:19.817Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Yakubu', Email: 'yakubumuhammad07@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria', Date: '2022-09-28T18:58:47.218Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Zakari', Email: 'umarfarouqft@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:05:11.372Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Yakubu', Email: 'xjamyakub@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:06:06.599Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Idris', Email: 'muhammadalmastur@gmail.com', 'Institutional Affiliation': 'Federal polytechnic bauchi', Date: '2022-09-28T19:09:25.795Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Samuel', 'Last Name': 'Katlong', Email: 'katlongsamuel@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:09:48.220Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Philip JD', 'Last Name': 'Nantok', Email: 'davphilip@yahoo.com', 'Institutional Affiliation': 'Federal College of Animal health and production technology', Date: '2022-09-28T19:10:59.505Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Victor', 'Last Name': 'Soni', Email: 'sonivictor7@gmail.com', 'Institutional Affiliation': 'Domenium', Date: '2022-09-28T19:11:45.413Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Idris', Email: 'muhammadalmastur@gmail.com', 'Institutional Affiliation': 'Federal polytechnic bauchi', Date: '2022-09-28T19:15:22.597Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Philip JD', 'Last Name': 'Nantok', Email: 'jarmoknantok@gmail.com', 'Institutional Affiliation': 'NVRI, Vom', Date: '2022-09-28T19:18:09.815Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Idris', Email: 'muhammadalmastur@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:19:08.474Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Huntullo', 'Last Name': 'Ngbale', Email: 'huntullo_ngbale@yahoo.com', 'Institutional Affiliation': 'University of Jos', Date: '2022-09-28T19:22:54.350Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Naziru', 'Last Name': 'Abdullahi Muhammad', Email: 'naziruabdullahi0000@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:29:13.230Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulqadir', 'Last Name': 'Musa Imam', Email: 'abdulqadirimam@gmail.com', 'Institutional Affiliation': 'Kaduna Polytechnic', Date: '2022-09-28T19:30:15.064Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Salihu', 'Last Name': 'Sulaiman', Email: 'salihusulaiman6540@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:32:25.124Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faisal', 'Last Name': 'Aliyu', Email: 'faisaldikko12@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:34:12.655Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Salihu', 'Last Name': 'Sulaiman', Email: 'salihusulaiman6540@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:34:47.631Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulqadir', 'Last Name': 'Musa Imam', Email: 'abdulqadirimam@gmail.com', 'Institutional Affiliation': 'Kaduna Polytechnic', Date: '2022-09-28T19:34:52.928Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulqadir', 'Last Name': 'Musa Imam', Email: 'abdulqadirimam@gmail.com', 'Institutional Affiliation': 'Kaduna Polytechnic', Date: '2022-09-28T19:46:16.335Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulqadir', 'Last Name': 'Musa Imam', Email: 'abdulqadirimam@gmail.com', 'Institutional Affiliation': 'Kaduna Polytechnic', Date: '2022-09-28T19:48:08.531Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'AUWALU AHMED', 'Last Name': 'MOHAMMED', Email: 'auwalggw@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:52:47.689Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Nasiru', Email: 'abdullahinasiru70@gmail.com', 'Institutional Affiliation': 'ABU Zaria', Date: '2022-09-28T19:55:19.064Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Olaide', 'Last Name': 'Balogun', Email: 'balogunwarlord@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T19:58:57.683Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'YAHYA', 'Last Name': 'YAHYA YAKUB', Email: 'yahyasaneeyakuub@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:08:07.311Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'YAHYA', 'Last Name': 'YAHYA YAKUB', Email: 'yahyasaneeyakuub@gmail.com', 'Institutional Affiliation': 'NCAIR', Date: '2022-09-28T20:08:28.278Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi', 'Last Name': 'Mujahidin', Email: 'mujahidinabdullahi001@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:11:31.886Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Mujahidin', Email: 'mujahidinabdullahi001@gmail.com', 'Institutional Affiliation': 'Usmanu danfodiyo University sokoto', Date: '2022-09-28T20:13:24.610Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Danladi Paul', 'Last Name': 'Dayokop', Email: 'pdanladi2030@gmail.com', 'Institutional Affiliation': 'Non', Date: '2022-09-28T20:23:11.704Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Danladi Paul', 'Last Name': 'Dayokop', Email: 'pdanladi2030@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:24:01.737Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'USMAN', 'Last Name': 'MUHAMMAD', Email: 'usmanmuhdmgm12@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:27:59.471Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abduljalil', 'Last Name': 'Aminu', Email: 'salwaaleey@gmail.com', 'Institutional Affiliation': 'Kurna Blockchain Community', Date: '2022-09-28T20:28:45.957Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Suleman', 'Last Name': 'Aliyu', Email: 'sulemanaleeeyu@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-09-28T20:41:35.635Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faisal', 'Last Name': 'Munir', Email: 'mfmunir14@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:52:00.273Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faisal', 'Last Name': 'Munir', Email: 'munirmohammadfaisal@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:53:38.525Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Ibrahim Jauro', Email: 'umaribrahimwjauro@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:56:06.517Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ejeh', 'Last Name': 'Ladi', Email: 'ejehladi2017@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T20:57:00.295Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sohail', 'Last Name': 'Ghafoor', Email: 'mr.sohailghafoor@gmail.com', 'Institutional Affiliation': 'TechiLab', Date: '2022-09-28T21:03:00.974Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Idriss', Email: 'aibrahimidriss14@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T21:17:46.038Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'HUSSAINI', 'Last Name': 'LAWAN', Email: 'mannado.lawanroni@gmail.com', 'Institutional Affiliation': 'Jigawa State Institute of Information Technology Kazaure', Date: '2022-09-28T21:24:56.064Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Isah Abdullahi', Email: 'dyeman61@gmail.com', 'Institutional Affiliation': 'Polytechnic', Date: '2022-09-28T21:25:47.189Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Idriss', Email: 'ibnibrahimqadir88@outlook.com', 'Institutional Affiliation': 'Yobe State University, Damaturu', Date: '2022-09-28T21:32:50.772Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Barkindo Alkali', Email: 'barkindoalkali@gmail.com', 'Institutional Affiliation': 'ARE Links Solutions Ltd', Date: '2022-09-28T21:53:39.439Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulrahman', 'Last Name': 'Barkindo Alkali', Email: 'barkindo@neicti.com.ng', 'Institutional Affiliation': '', Date: '2022-09-28T21:54:38.687Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Kabiru', Email: 'abbadanfairaturba@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T21:55:01.737Z', 'Company\/Organization': 'Business',
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Kabiru', Email: 'abbadanfairaturba@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T21:58:52.450Z', 'Company\/Organization': 'Business',
}, {
  Categories: 'Participants', 'First Name': 'Chihurumnanya', 'Last Name': 'Nwanevu', Email: 'nwanevunkem.chihurumnanya@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T22:08:59.045Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Chihurumnanya', 'Last Name': 'Nwanevu', Email: 'nwanevunkem.chihurumnanya@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T22:09:56.378Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Suleiman Isah', Email: 'ibrahimsuleimanisa@gmail.com', 'Institutional Affiliation': 'ISCOM University of Benin Republic, Cotonou', Date: '2022-09-28T22:18:34.836Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Albert', 'Last Name': 'iloh', Email: 'albert.iloh@unionsystems.com', 'Institutional Affiliation': '', Date: '2022-09-28T22:24:18.902Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yinka', 'Last Name': 'Olawoyin', Email: 'ykrealvision@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T22:42:17.829Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Al-mustapha', 'Last Name': 'Mustapha', Email: 'almustymustyjr@gmail.com', 'Institutional Affiliation': 'Informatics Academy', Date: '2022-09-28T22:47:43.589Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'muhammad', 'Last Name': 'Abdullahi', Email: 'muhammadiabdu02@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-28T22:52:09.565Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nazifi Idris', 'Last Name': 'Muhammad', Email: 'idrisnazifi90@gmail.com', 'Institutional Affiliation': 'BUK', Date: '2022-09-28T23:09:08.557Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nazifi Idris', 'Last Name': 'Muhammad', Email: 'idrisnazifi90@gmail.com', 'Institutional Affiliation': 'BUK', Date: '2022-09-28T23:11:26.857Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mohammed', 'Last Name': 'Nazir', Email: 'dr.zmoh.dee@gmail.com', 'Institutional Affiliation': 'High Tech Agro Farm Nigeria Limited', Date: '2022-09-28T23:39:20.223Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Adamu', 'Last Name': 'Inuwa', Email: 'Adamuinuwa269@gmail.com', 'Institutional Affiliation': 'To learn', Date: '2022-09-29T04:54:55.000Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Isa', Email: 'ibrahimisa@technyon.io', 'Institutional Affiliation': '', Date: '2022-09-29T05:06:49.071Z', 'Company\/Organization': 'Technyon Technologies',
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Ibrahim Jauro', Email: 'umaribrahimwjauro@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T05:38:49.586Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yusuf', 'Last Name': 'Adamu saleh', Email: 'yusufadamusaleh5090@gmail', 'Institutional Affiliation': '', Date: '2022-09-29T05:48:28.427Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Amina', 'Last Name': 'Abdullahi Umar', Email: 'aminaabdul2017@gmail.com', 'Institutional Affiliation': 'Blockchain', Date: '2022-09-29T06:18:12.904Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Amina', 'Last Name': 'Abdullahi', Email: 'aminaabdul2023@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T06:18:48.751Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Amina', 'Last Name': 'Abdullahi', Email: 'aminaabdul20223@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T06:21:34.008Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': "Shafi'u", 'Last Name': 'Alhassan', Email: 'shaff7707@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T07:08:37.811Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Vivek', 'Last Name': 'T K', Email: 'vivek@innogen.in', 'Institutional Affiliation': '', Date: '2022-09-29T07:17:07.079Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Vivek', 'Last Name': 'T K', Email: 'vivek@innogen.in', 'Institutional Affiliation': 'Pearsonvue', Date: '2022-09-29T07:17:44.367Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Samaila', 'Last Name': 'Leeman', Email: 'samaila.leeman@gmail.com', 'Institutional Affiliation': 'Kaduna SUBEB', Date: '2022-09-29T07:32:39.338Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'hope', 'Last Name': 'agbaye', Email: 'hopey555agbaye@gmail.com', 'Institutional Affiliation': 'nile university of nigeria', Date: '2022-09-29T07:46:08.928Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'hope', 'Last Name': 'agbaye', Email: 'hopey555agbaye@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T07:46:36.986Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aminu Bala', 'Last Name': 'Aliyu', Email: 'aminubalaaliyu@gmail.com', 'Institutional Affiliation': 'Kano University Of Science And Technology Wudil', Date: '2022-09-29T07:46:43.509Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'MUBASSHIR', 'Last Name': 'WALIYU LUKMAN', Email: 'albashirmw33@gmail.com', 'Institutional Affiliation': 'Bayero University Kano', Date: '2022-09-29T07:55:45.189Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kafayat', 'Last Name': 'Omoboade', Email: 'kafayatomoboade@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T08:01:14.241Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Israel', 'Last Name': 'Abba', Email: 'Luvexist@yahoo.com', 'Institutional Affiliation': 'Nasarawa State University Keffi', Date: '2022-09-29T08:49:00.078Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Zainab', 'Last Name': 'Sadeeq', Email: 'zainabsadeeq78@gmail.com', 'Institutional Affiliation': 'Nile university', Date: '2022-09-29T09:28:07.295Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Chihurumnanya', 'Last Name': 'Nwanevu', Email: 'nwanevunkem.chihurumnanya@gmail.com', 'Institutional Affiliation': 'Nigeria Association of Computing Students- NACOS National', Date: '2022-09-29T10:58:04.022Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'ABAH', 'Last Name': 'ELAIGWU DAVID', Email: 'abahelaigwudavid0@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T11:32:19.927Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hamisu', 'Last Name': 'Yusuf', Email: 'yusufhamisu1143@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University', Date: '2022-09-29T12:11:56.475Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mukhtar', 'Last Name': 'Lawan', Email: 'mukhtarlawangoa2017@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-09-29T12:27:28.760Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Fatima', 'Last Name': 'Habib', Email: 'tjfatimah12@gmail.com', 'Institutional Affiliation': 'Nile University of Nigeria', Date: '2022-09-29T13:11:25.255Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Lawan', 'Last Name': 'Muktar', Email: 'lawkad12@gmail.com', 'Institutional Affiliation': 'Computer', Date: '2022-09-29T13:20:56.530Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muktar', 'Last Name': 'Lawan', Email: 'lwnmukhtar@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T13:21:47.805Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Chukwuebuka', 'Last Name': 'Ugboaja', Email: 'sundaymiracle1@gmail.com', 'Institutional Affiliation': 'Code Campus International', Date: '2022-09-29T13:31:12.082Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Godwin', 'Last Name': 'Reuben', Email: 'gutsy258@gmail.com', 'Institutional Affiliation': 'code campus international', Date: '2022-09-29T13:33:46.340Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Doose', 'Last Name': 'Sen', Email: 'doosedear@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T13:38:44.639Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Auwal', 'Last Name': 'Ibrahim', Email: 'auwalibrahim2@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria', Date: '2022-09-29T13:39:06.173Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Daniels', 'Last Name': 'Omijie', Email: 'danosky54@gmail.com', 'Institutional Affiliation': 'Code Campus', Date: '2022-09-29T13:41:14.268Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Roderick', 'Last Name': 'Omijie', Email: 'joelomijie@gmail.com', 'Institutional Affiliation': 'code campus International', Date: '2022-09-29T13:42:23.659Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ofuani', 'Last Name': 'Daniel', Email: 'ofuanidaniel@gmail.com', 'Institutional Affiliation': 'Code Campus', Date: '2022-09-29T13:47:39.812Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Omega', 'Last Name': 'Igbudu', Email: 'igbuduomega@gmail.com', 'Institutional Affiliation': 'PMONEY ACADEMY', Date: '2022-09-29T13:55:40.418Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Omega', 'Last Name': 'Igbudu', Email: 'cryptowithohms@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T13:56:19.187Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulsalam', 'Last Name': 'Ayoola', Email: 'abdulsalamayoola07@gmail.com', 'Institutional Affiliation': 'CodeCampus', Date: '2022-09-29T14:08:07.581Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aminu', 'Last Name': 'Ibrahim', Email: 'aminuibrahimbaballe@gmail.com', 'Institutional Affiliation': 'BUK', Date: '2022-09-29T14:09:29.947Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bello Yusuf', 'Last Name': 'Yusuf', Email: 'yusufyusufbello649@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T14:26:29.718Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ayuba', 'Last Name': 'Bature', Email: 'ayubabaturegusau@gmail.com', 'Institutional Affiliation': 'CEDUDUS', Date: '2022-09-29T14:40:27.462Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusrah', 'Last Name': 'Yusuf', Email: 'yusrahyusufsabo@gmail.com', 'Institutional Affiliation': 'Federal University Dutsinma', Date: '2022-09-29T14:51:09.381Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ahmad', 'Last Name': 'Tamim', Email: 'ahmadtameem@yahoo.com', 'Institutional Affiliation': 'Nimc', Date: '2022-09-29T14:56:16.336Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmad', 'Last Name': 'Tamim', Email: 'ahmadtamim020@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T14:56:47.877Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Oluwaseun', 'Last Name': 'Babatunde', Email: 'oseunbabs@gmail.com', 'Institutional Affiliation': 'Fidelity', Date: '2022-09-29T15:09:24.612Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Kabiru Ado', 'Last Name': 'Ahmed', Email: 'malikkano@gmail.com', 'Institutional Affiliation': 'Kano', Date: '2022-09-29T15:13:31.679Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Wasiu', 'Last Name': 'Tijani', Email: 'biolatijani13@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T15:36:45.980Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Wasiu', 'Last Name': 'Tijani', Email: 'biolatijani13@gmail.com', 'Institutional Affiliation': 'El-Marshalle Consult', Date: '2022-09-29T15:37:41.916Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Zakariyya', 'Last Name': 'Adamu Dahiru', Email: 'adamszakad@gmail.com', 'Institutional Affiliation': 'Bayero University, Kano', Date: '2022-09-29T15:51:20.755Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Halimat Ozavize', 'Last Name': 'Ezzu-Siyaka', Email: 'ezzuhalimat@gmail.com', 'Institutional Affiliation': 'Federal university of technology Akure', Date: '2022-09-29T15:51:26.784Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Zakariyya', 'Last Name': 'Adamu Dahiru', Email: 'zdahiru@nitda.gov.ng', 'Institutional Affiliation': 'NITDA', Date: '2022-09-29T15:52:08.427Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'JAMILU', 'Last Name': 'LAWAN', Email: 'jamilulawan001@gmail.com', 'Institutional Affiliation': 'dangote oil refinery', Date: '2022-09-29T16:12:26.963Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Ahmed', Email: 'therenewableenergyhubnig@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T16:24:19.968Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Ahmed', Email: 'therenewableenergyhubnig@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T16:24:43.870Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ashafa', 'Last Name': 'Sani', Email: 'saniashafa7@gmail.com', 'Institutional Affiliation': 'Federal University Dutsinma', Date: '2022-09-29T16:24:28.586Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ahmed', 'Last Name': 'Ahmed', Email: 'therenewableenergyhubnig@gmail.com', 'Institutional Affiliation': 'PV Renewable energy Hub', Date: '2022-09-29T16:25:28.881Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ashafa', 'Last Name': 'Sani', Email: 'saniashafa7@gmail.com', 'Institutional Affiliation': 'Federal University Dutsinma', Date: '2022-09-29T16:30:35.368Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Ahmed', Email: 'therenewableenergyhubnig@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T16:35:23.439Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Karofi', 'Last Name': 'hamza', Email: 'karofeesalahu@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T16:40:46.996Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Karofi', 'Last Name': 'hamza', Email: 'skarofi@nitda.gov.ng', 'Institutional Affiliation': '', Date: '2022-09-29T16:41:10.736Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kelvin', 'Last Name': 'Omonuwa', Email: 'Kelvinomonuwa4@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:03:35.845Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bilya', 'Last Name': 'Ahmad', Email: 'ahmadbilya@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:08:05.509Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmad', 'Last Name': 'Usman', Email: 'ahmadu56@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:08:38.381Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adenekan', 'Last Name': 'Oluwasegun', Email: 'adenekanoluwasegun2018@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:11:25.123Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Adenekan', 'Last Name': 'Oluwasegun', Email: 'adenekanoluwasegun2018@gmail.com', 'Institutional Affiliation': 'Elizade university', Date: '2022-09-29T17:12:02.609Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bilkisu', 'Last Name': 'Ardo', Email: 'bilkeesuardo@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:22:09.408Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Oluwaseun', 'Last Name': 'Marcus', Email: 'seunmarcus@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:28:27.161Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'ABUBAKAR', 'Last Name': 'AUWAL', Email: 'abubakarauwaltela@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T17:58:30.115Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Zayyanu', 'Last Name': 'Sani', Email: 'zsani4044@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T18:17:10.043Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Zayyanu', 'Last Name': 'Sani', Email: 'zsani4044@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T18:21:29.131Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulqadir', 'Last Name': 'Musa Imam', Email: 'abdulqadirmusaimam@gmail.com', 'Institutional Affiliation': 'Kaduna Polytechnic', Date: '2022-09-29T18:31:04.611Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Miracle', 'Last Name': 'Okafor', Email: 'okaformiracle49@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T18:33:28.062Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulmalik', 'Last Name': 'Ango', Email: 'abdulmalikango@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T18:43:21.315Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'Ango', Email: 'abdulmalikango@gmail.com', 'Institutional Affiliation': 'Abubakar Tafawa Balewa University Bauchi', Date: '2022-09-29T18:44:07.457Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Abdullahi', Email: 'ibraheemotorogu@gmail.com', 'Institutional Affiliation': 'Nasarawa State University, Keffi', Date: '2022-09-29T18:53:10.602Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yusuf', 'Last Name': 'Kasim', Email: 'kasimyusuf151@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T19:11:04.538Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aliyu Ibrahim', 'Last Name': 'Agaisa', Email: 'aliyuagaisa19@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T19:24:01.219Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliyu Ibrahim', 'Last Name': 'Agaisa', Email: 'aliyuagaisa@yahoo.com', 'Institutional Affiliation': 'Foundation Integrated college Doma', Date: '2022-09-29T19:26:06.305Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Robert-Igbasanmi', 'Last Name': 'Olusola', Email: 'igbasanx@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T19:35:37.168Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yasin', 'Last Name': 'Abdulwahab Musa', Email: 'yasinbchain@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-09-29T20:55:10.640Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abbas Yahaya', 'Last Name': 'Abubakar', Email: 'abbasssy@gmail.com', 'Institutional Affiliation': 'Nasarawa State University Keffi', Date: '2022-09-29T21:49:19.832Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abubakar Abbas', 'Last Name': 'Yahaya', Email: 'abbasssy53@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-29T21:50:43.196Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sadiq', 'Last Name': 'Aliyu', Email: 'sadiqaliyugumel@gmail.com', 'Institutional Affiliation': 'Nigerian Defense Academy', Date: '2022-09-29T23:06:37.348Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jidda harun', 'Last Name': 'Abba', Email: 'jiddaharun8@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T00:26:57.897Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Frey', 'Last Name': 'Sotelo', Email: 'frey4frey@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T02:20:55.812Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Lawal', 'Last Name': 'Shuaibu', Email: 'danshuaibu2006@gmail.com', 'Institutional Affiliation': 'Private', Date: '2022-09-30T04:00:26.049Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Amin', 'Last Name': 'Dayekh', Email: 'amin.dayekh@megamore.ng', 'Institutional Affiliation': 'Megamore Wireless Broadband Limited', Date: '2022-09-30T04:04:18.717Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Amin', 'Last Name': 'Dayekh', Email: 'admin@megamore.ng', 'Institutional Affiliation': '', Date: '2022-09-30T04:04:51.908Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Amin', 'Last Name': 'Dayekh', Email: 'amin.dayekh@megamore.ng', 'Institutional Affiliation': '', Date: '2022-09-30T04:05:33.364Z', 'Company\/Organization': 'MegaMore Wireless Broadband limited',
}, {
  Categories: 'Participants', 'First Name': 'Christopher', 'Last Name': 'Oshiokhue', Email: 'ceokish@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T04:39:24.066Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Christopher', 'Last Name': 'Oshiokhue', Email: 'ceokish@gmail.com', 'Institutional Affiliation': 'Michael & Cecilia Ibru University Agbarha-Otor, Ughelli-North LGA Delta State', Date: '2022-09-30T04:40:04.098Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Rilwanu', 'Last Name': 'Ahmed Isa', Email: 'rilwanuahmed7@gmail.com', 'Institutional Affiliation': 'Bitkova Academy', Date: '2022-09-30T04:41:32.518Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Rilwanu', 'Last Name': 'Ahmed Isa', Email: 'rilwanumayo2@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T04:42:19.611Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Arabo', 'Last Name': 'Ismaila', Email: 'ismailaarabo08@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T04:52:52.080Z', 'Company\/Organization': 'Transmission company of',
}, {
  Categories: 'Master Class', 'First Name': 'Rabiu', 'Last Name': 'Shitu', Email: 'rshitu39@gmail.com', 'Institutional Affiliation': 'Buk', Date: '2022-09-30T05:01:30.483Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Muhammad Bashir', Email: 'danmasani12@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:09:12.569Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Abubakar', Email: 'zgamus46@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:09:23.314Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kabiru', 'Last Name': 'Musa', Email: 'musakabeer51@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:11:52.133Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Shehu', Email: 'ahmadshehu283@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:18:30.693Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'IBRAHIM', 'Last Name': 'TIJJANI', Email: 'teejaymetal@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:19:54.589Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'John', 'Last Name': 'Bamidele', Email: 'amostogun@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:37:24.931Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ilyas', 'Last Name': 'Abdullahi', Email: 'ilyabdul@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-30T05:52:18.194Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'Muhammad', Email: 'bunkure2004@gmail.com', 'Institutional Affiliation': 'BLOCKCHAIN TECHNOLOGY and atfic', Date: '2022-09-30T06:03:36.103Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Yusuf', Email: 'aymaiturare6@gmail.com', 'Institutional Affiliation': 'Unimaid', Date: '2022-09-30T06:05:27.527Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Yusuf', Email: 'tukurmama1@gmail.com', 'Institutional Affiliation': 'FUT Minna', Date: '2022-09-30T06:06:45.028Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Musa', 'Last Name': 'Abubakar', Email: 'musaabubakar335@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T06:11:55.019Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Adeoye', 'Last Name': 'Benjamin', Email: 'benjamineadeoye@gmail.com', 'Institutional Affiliation': 'National Population Commission', Date: '2022-09-30T06:57:55.030Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Alhassan', 'Last Name': 'Tsalhatu', Email: 'alhassantsalha2015@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T06:59:15.850Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Alhassan', 'Last Name': 'Tsalhatu', Email: 'alhassantsalhatu@gmail.com', 'Institutional Affiliation': 'Corp member', Date: '2022-09-30T07:00:05.367Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdurrahman', 'Last Name': 'ABDULWASIU', Email: 'abdulwasiuabdurrahman@gmail.com', 'Institutional Affiliation': 'MCMG', Date: '2022-09-30T07:17:52.700Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bishir', 'Last Name': 'Salisu', Email: 'bishirsalisu4@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:27:29.985Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bethel', 'Last Name': 'Melariri', Email: 'bethelmelariri@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:28:59.790Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Isah', 'Last Name': 'Haruna Muhammad', Email: 'elhareen@gmail.com', 'Institutional Affiliation': 'Udusok', Date: '2022-09-30T07:38:53.256Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi', 'Last Name': 'Muhammad Nyajo', Email: 'kapangani4051@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:43:54.344Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Mohammed', 'Last Name': 'Lawan', Email: 'muhammadlawan04@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:45:43.730Z', 'Company\/Organization': 'National youth services Corps',
}, {
  Categories: 'Participants', 'First Name': 'Rabiu', 'Last Name': 'Abubakar', Email: 'rabiuabubakarkaura@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:48:28.219Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Oluwatobi', 'Last Name': 'Mofobi', Email: 'omofobi@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:49:27.864Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sanusi', 'Last Name': 'Usman', Email: 'sum4217@gmail.com', 'Institutional Affiliation': 'Federal University of Technology minna', Date: '2022-09-30T07:49:45.838Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Oluwatobi', 'Last Name': 'Mofobi', Email: 'omofobi@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-09-30T07:50:26.291Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hashim Ghali', 'Last Name': 'Garba', Email: 'hasheemggarba@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T07:52:49.311Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdoulkarim', 'Last Name': 'Ahmadou Abdoullahi', Email: 'fadaracity@gmail.com', 'Institutional Affiliation': 'Human resources', Date: '2022-09-30T07:54:15.800Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Richard', 'Last Name': 'Isaac', Email: 'olurichardisaac@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T08:16:34.406Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Richard', 'Last Name': 'Isaac', Email: 'mobiverio@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T08:17:09.051Z', 'Company\/Organization': 'Mobiverio Digital Agency',
}, {
  Categories: 'Exhibitor', 'First Name': 'Abubakar', 'Last Name': 'Yakubu Ahmad', Email: 'Yakubuabubakarahmad@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T08:18:36.278Z', 'Company\/Organization': 'KHALEEPHA DIGITAL PRINTS GLOBAL VENTURES',
}, {
  Categories: 'Master Class', 'First Name': 'Muhammed', 'Last Name': 'Abubakar Tijjani', Email: 'moduu6667@gmail.com', 'Institutional Affiliation': 'Binance Academy', Date: '2022-09-30T08:27:01.949Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammed', 'Last Name': 'Abubakar Tijjani', Email: 'moduu6667@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T08:28:05.065Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ridwan', 'Last Name': 'AbduRrasheed', Email: 'abdurrasheedridwan506@gmail.com', 'Institutional Affiliation': 'Secondary School', Date: '2022-09-30T08:43:42.448Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ridwan', 'Last Name': 'AbdurRasheed', Email: 'abdurrasheedridwan506@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T08:44:38.306Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Khalid', 'Last Name': 'Yusuf', Email: 'khalidyusufs05@gmail.com', 'Institutional Affiliation': 'Command Science Secondary School, Lafia, Nasarawa state.', Date: '2022-09-30T08:52:21.421Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Anisah', 'Last Name': 'Yusuf', Email: 'anisahsabo@gmail.com', 'Institutional Affiliation': 'Federal University Dutsinma', Date: '2022-09-30T08:56:46.782Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Daniel', 'Last Name': 'Haruna', Email: 'noreosdaniel@gmail.com', 'Institutional Affiliation': 'Simplicity Concept NG', Date: '2022-09-30T09:00:24.006Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hamisu', 'Last Name': 'Shehu', Email: 'hamisu.shehu@galaxybackbone.com.ng', 'Institutional Affiliation': '', Date: '2022-09-30T09:26:41.209Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdalla', 'Last Name': 'Nura Abba', Email: 'n.abba@nirsal.com', 'Institutional Affiliation': '', Date: '2022-09-30T09:27:03.347Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Jane', 'Last Name': 'Braimah', Email: 'jane.noelab@gmail.com', 'Institutional Affiliation': 'Galaxy Backbone', Date: '2022-09-30T09:41:52.211Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Jane', 'Last Name': 'Beaimah', Email: 'jane.noelab@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T09:43:21.981Z', 'Company\/Organization': 'Galaxy Backbone',
}, {
  Categories: 'Participants', 'First Name': 'Tobechukwu', 'Last Name': 'Ndunagu', Email: 'ndunagutobechukwu@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-30T09:47:30.096Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Tobechukwu', 'Last Name': 'Ndunagu', Email: 'tobechukwu@infusionlawyers.com', 'Institutional Affiliation': 'Infusion Lawyers', Date: '2022-09-30T09:50:01.209Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdul shakur', 'Last Name': 'Muhammad lawal', Email: 'abdulshakurmlawal8@gmail.com', 'Institutional Affiliation': 'Government secondary school jabi Abuja', Date: '2022-09-30T09:56:10.624Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Kabiru Mohammed', 'Last Name': 'Dantani', Email: 'kabirumohammeddantani@gmail.com', 'Institutional Affiliation': 'Niger State Ministry of Works', Date: '2022-09-30T09:59:24.541Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nura', 'Last Name': 'Ibrahim Ahmed', Email: 'nuraibrahim1980@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T10:02:26.826Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdussalam', 'Last Name': 'Yahuza', Email: 'send2ayabbas@gmail.com', 'Institutional Affiliation': 'Nigerian Army University Biu', Date: '2022-09-30T10:58:21.797Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Tukur Abdullahi', 'Last Name': 'Bala', Email: 'balatukurabdullahi21@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-09-30T10:59:09.868Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'ZAHARADDEEN', 'Last Name': 'ALIYU', Email: 'amtsolarsystems@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T11:02:26.008Z', 'Company\/Organization': 'AMT SOLAR ENERGY SOLUTIONS',
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Yakubu', Email: 'mysaraki@yahoo.com', 'Institutional Affiliation': 'Professor Iya Abubakar', Date: '2022-09-30T11:18:59.124Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nuruddeen', 'Last Name': 'Mohammed Jalingo', Email: 'princen1800@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T11:31:19.503Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Balarabe', 'Last Name': 'Garba', Email: 'Balarabe.garba@galaxybackbone.com.ng', 'Institutional Affiliation': '', Date: '2022-09-30T11:40:13.668Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Musa', 'Last Name': 'Umar', Email: 'musaomarusman@gmail.com', 'Institutional Affiliation': 'Sharda University, India', Date: '2022-09-30T11:51:21.169Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ilyas', 'Last Name': 'Alhasan', Email: 'ilyasalhasan@gmail.com', 'Institutional Affiliation': 'Buk', Date: '2022-09-30T11:58:36.503Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Akila', 'Last Name': 'Baba', Email: 'akilababamohd@gmail.com', 'Institutional Affiliation': 'Nile', Date: '2022-09-30T11:59:57.897Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ilyas', 'Last Name': 'Alhasan', Email: 'ilyasalhasandandache@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T12:09:24.704Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Sunday', 'Last Name': 'Lamba', Email: 'sundaylamba5@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T12:19:19.422Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Musa', 'Last Name': 'Sani', Email: 'musasaniyakasai@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T12:23:42.964Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Shehu Nasiru', 'Last Name': 'Muhammad', Email: 'shehunasiru117@gmail.com', 'Institutional Affiliation': 'Samaaha Institute of Training and Research', Date: '2022-09-30T12:25:15.914Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Oba Adeyemi', 'Last Name': 'Oluwasegun', Email: 'obaadeyemioluwasegun@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T13:30:06.500Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Musa', 'Last Name': 'Umar', Email: 'musaomarjidda@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T13:32:31.708Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'NDER', 'Last Name': 'LINUS', Email: 'nderlinus@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T14:35:39.100Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'NDER', 'Last Name': 'LINUS', Email: 'naijahubtv2021@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T14:36:31.904Z', 'Company\/Organization': 'NaijahubTv Media Services',
}, {
  Categories: 'Master Class', 'First Name': 'Zakariya', 'Last Name': 'Sani', Email: 'zakariyasanik@gmail.com', 'Institutional Affiliation': 'Federal University Dutsin-ma, Katsina State', Date: '2022-09-30T14:43:15.805Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'DAMILARE', 'Last Name': 'ADIAT', Email: 'Drepixel@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T14:56:36.277Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nuraddeen', 'Last Name': 'Musa', Email: 'Nmdeen1@gmail.com', 'Institutional Affiliation': 'Nitda', Date: '2022-09-30T15:18:34.211Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Akoji', 'Last Name': 'Egbunu', Email: 'akojiegbunu25@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T15:34:44.965Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nuruddeen', 'Last Name': 'Mohammed Jalingo', Email: 'princen1800@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T16:40:11.855Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abba Ahmad', 'Last Name': 'Bashir', Email: 'abbabashir630@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T16:41:10.856Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi ado', 'Last Name': 'Wakili', Email: 'abdullahiadowakili@gamaicom', 'Institutional Affiliation': 'Ssce', Date: '2022-09-30T16:54:41.381Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi ado', 'Last Name': 'Wakili', Email: 'abdullahiadowakili@gmailcom', 'Institutional Affiliation': '', Date: '2022-09-30T16:56:29.336Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi ado', 'Last Name': 'Wakili', Email: 'abdullahiadowakil@gmail', 'Institutional Affiliation': '', Date: '2022-09-30T17:15:49.526Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Akeem', 'Last Name': 'Ajala', Email: 'ajala247@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T17:17:40.516Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Akeem', 'Last Name': 'Ajala', Email: 'ajala247@gmail.com', 'Institutional Affiliation': 'Bayero University, Kano (School of Continuing Education)', Date: '2022-09-30T17:17:57.673Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusuf', 'Last Name': 'Oladokun', Email: 'yusufoladokun89@gmail.com', 'Institutional Affiliation': 'Domineum', Date: '2022-09-30T17:47:21.941Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Henry', 'Last Name': 'Nnamani', Email: 'hoyx0101@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T18:11:03.071Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Idriss', Email: 'aibrahimidriss14@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T18:23:02.571Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Idriss', Email: 'ibnibrahimqadir88@outlook.com', 'Institutional Affiliation': 'Air Force Research and Development Centre, Kaduna', Date: '2022-09-30T18:25:27.798Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abubakar', 'Last Name': 'Salisu Badejo', Email: 'abubakarsalisubadejo@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T19:35:21.306Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Barka', 'Last Name': 'Elijah Gituwa', Email: 'barka.elijah@fedcs.gov.ng', 'Institutional Affiliation': '', Date: '2022-09-30T20:48:07.780Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Barka', 'Last Name': 'Elijah Gituwa', Email: 'barka.elijah@fedcs.gov.ng', 'Institutional Affiliation': 'Bureau of Public Procurement', Date: '2022-09-30T20:49:20.785Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Arafat', 'Last Name': 'Umar', Email: 'arafatumartora@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-30T22:59:43.453Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yahaya', 'Last Name': 'Sule', Email: 'yakil4rill.@yahoo.com', 'Institutional Affiliation': '', Date: '2022-09-30T23:51:28.920Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yahaya', 'Last Name': 'Sule', Email: 'yakil4rill@yahoo.com', 'Institutional Affiliation': 'Public Service Institute of Nigeria', Date: '2022-09-30T23:53:09.817Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bashir', 'Last Name': 'A. Abdullah', Email: 'bashir79aa@gmail.com', 'Institutional Affiliation': 'Ehab IT and General Solutions', Date: '2022-10-01T00:27:17.537Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdurrahman', 'Last Name': 'Sulaiman Adam', Email: 'binsulaiman101@gmail.com', 'Institutional Affiliation': 'University of Maiduguri', Date: '2022-10-01T02:21:17.181Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Abdulrahman Wali', Email: 'mowaleey@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T05:13:20.946Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nazifi Idris', 'Last Name': 'Muhammad', Email: 'idrisnazifi90@gmail.com', 'Institutional Affiliation': 'BUK', Date: '2022-10-01T06:25:41.670Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': '', 'Last Name': '', Email: '', 'Institutional Affiliation': '', Date: '2022-10-01T07:09:30.848Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Muheez', 'Last Name': 'Adeagbo', Email: 'muheezadeagbo23@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T08:16:53.174Z', 'Company\/Organization': 'Gigs-tech Solutions and Consult',
}, {
  Categories: 'Participants', 'First Name': 'Kabiru', 'Last Name': 'Musa', Email: 'musakabeer51@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T09:11:04.350Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Muheez', 'Last Name': 'Adeagbo', Email: 'muheezadeagbo23@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T09:18:34.691Z', 'Company\/Organization': 'Gigs-tech Solutions and Consult',
}, {
  Categories: 'Master Class', 'First Name': 'Ayodele', 'Last Name': 'Esan', Email: 'Gcef18@gmail.com', 'Institutional Affiliation': 'Nitda', Date: '2022-10-01T09:40:17.144Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulkarim Adeshina', 'Last Name': 'Abdulsalam', Email: 'arole16@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-01T09:43:57.874Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Akinwumi', 'Last Name': 'Ogundipe', Email: 'paulogundipe9@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T09:48:15.875Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulrahman', 'Last Name': 'Shehu', Email: 'shehuabdulrahman5@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T09:51:10.483Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Akinwumi', 'Last Name': 'Ogundipe', Email: 'paulogundipe9@gmail.com', 'Institutional Affiliation': 'Global Distance Learning Institute, Abuja', Date: '2022-10-01T09:53:27.663Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Godspower', 'Last Name': 'tom', Email: 'tomgodspower9@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T10:09:44.191Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Lauretta', 'Last Name': 'Bala', Email: 'lauramenda78@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T10:14:24.738Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'DANIEL', 'Last Name': 'NOAH', Email: 'edemdan92@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T10:28:21.065Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'NASIRU', 'Last Name': 'USMAN A', Email: 'Alnasiruusman@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-01T10:33:08.304Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nasiru', 'Last Name': 'Usman Abubakar', Email: 'elnasiruabubakar001@gmail.com', 'Institutional Affiliation': 'Nasarawa State university Keffi', Date: '2022-10-01T10:34:09.402Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sabiu', 'Last Name': 'Muhammad', Email: 'sirhagumel@gmail.com', 'Institutional Affiliation': 'FTX Africa', Date: '2022-10-01T10:35:44.037Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Adama', Email: 'adama_ibrahim59@yahoo.com', 'Institutional Affiliation': 'Smart Edge Technologies', Date: '2022-10-01T11:09:31.146Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Omang', 'Last Name': 'Augustine', Email: 'ekahomang@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T11:54:49.818Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Sulaiman Sanusi', Email: 'pharmahmad7913@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T12:44:15.826Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Babagana M', 'Last Name': 'Tamarmi', Email: 'bgtamarmi@gmail.com', 'Institutional Affiliation': 'MOGCOLIS', Date: '2022-10-01T12:57:50.238Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Babagana M', 'Last Name': 'Tamarmi', Email: 'bgtamarmi@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T12:58:27.048Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Michael', 'Last Name': 'Ujah', Email: 'michaelujahola@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T13:04:59.121Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sheikh Tijan', 'Last Name': 'Badjie', Email: 'tijanbadjie200@gmail.com', 'Institutional Affiliation': 'Intentional University of Africa', Date: '2022-10-01T13:06:18.310Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sheikh Tijan', 'Last Name': 'Badjie', Email: 'tijanbadjie200@gmail.com', 'Institutional Affiliation': 'Intentional University of Africa', Date: '2022-10-01T13:06:30.276Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sheikh Tijan', 'Last Name': 'Badjie', Email: 'tijanbadjie200@gmail.com', 'Institutional Affiliation': 'Intentional University of Africa', Date: '2022-10-01T13:06:40.710Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Adamu Adamu', Email: 'adamibb400@gmail.com', 'Institutional Affiliation': 'Nas poly', Date: '2022-10-01T14:02:24.348Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Brilliance', 'Last Name': 'Hub', Email: 'brillianceexpress@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T15:32:19.177Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Muhammad Aliyu', Email: 'umarmasumaila@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T15:38:55.346Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Johncross', 'Last Name': 'Nwairo', Email: 'nwairojohncross@gmail.com', 'Institutional Affiliation': 'HASAL MFB', Date: '2022-10-01T16:29:46.152Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ademola', 'Last Name': 'Babatola Daniel', Email: 'ademolababatola@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T16:56:51.995Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adamu', 'Last Name': 'Yakubu', Email: 'radcomradeay2015@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T18:05:01.504Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'HARUNA GIMBA', 'Last Name': 'AHMED', Email: 'harunaahmed24@gmail.com', 'Institutional Affiliation': 'YOBE STATE UNIVERSITY DAMATURU', Date: '2022-10-01T18:08:28.829Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Precious', 'Last Name': 'Maraizu', Email: 'preciousmaraizu@rocketmail.com', 'Institutional Affiliation': 'Nigeria Association of Computing Students, NACOS National', Date: '2022-10-01T18:55:33.150Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Chihurumnanya', 'Last Name': 'Nwanevu', Email: 'nwanevunkem.chihurumnanya@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T18:56:19.587Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Muhammad Dindin', Email: 'dindinmm@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:07:02.870Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yusuf', 'Last Name': 'Sani Abdullahi', Email: 'yusufsani440@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:08:43.913Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Daniel', 'Last Name': 'Osinlu', Email: 'danielosinlu@gmail.com', 'Institutional Affiliation': 'University Of Calabar', Date: '2022-10-01T20:08:45.439Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ransom', 'Last Name': 'Philemon', Email: 'ransomphilemon123@gmail.com', 'Institutional Affiliation': 'Nile university', Date: '2022-10-01T20:08:59.661Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Joseph', 'Last Name': 'Mela', Email: 'josephmela58@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:10:01.713Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Joseph', 'Last Name': 'Mela', Email: 'josephmela58@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:10:21.103Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Joseph', 'Last Name': 'Mela', Email: 'josephmela58@gmail.com', 'Institutional Affiliation': '.', Date: '2022-10-01T20:11:07.297Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Boma', 'Last Name': 'Agbake', Email: 'boma.agbake@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-10-01T20:11:57.141Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ibrahim', 'Last Name': 'Babangida Kani', Email: 'bkebraheem@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:16:07.361Z', 'Company\/Organization': 'Spendoware',
}, {
  Categories: 'Participants', 'First Name': 'Henry', 'Last Name': 'Adeyemi', Email: 'adeyemihenry5@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:19:53.152Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yushau', 'Last Name': 'Shehu', Email: 'yoosha3059@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:19:59.193Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Sadisu', 'Last Name': 'Umar', Email: 'bilbis3010@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:29:46.118Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Aliyu', 'Last Name': 'Sani Muhammad', Email: 'aliyusanimuhammed8@gmail.com', 'Institutional Affiliation': 'Iheris university togo', Date: '2022-10-01T20:32:35.391Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Salahu', 'Last Name': 'Mahmud kani', Email: 'salahumahmudkani@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:35:27.690Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Israel', 'Last Name': 'Inwang', Email: 'easysmshub@gmail.com', 'Institutional Affiliation': 'Sports', Date: '2022-10-01T20:38:24.391Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Paul', 'Last Name': 'Hosea', Email: 'paultwigghosea@gmail.com', 'Institutional Affiliation': 'Kaduna federal polytechnic', Date: '2022-10-01T20:39:55.466Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muwaffiq', 'Last Name': 'Saleh', Email: 'muwaffiq005@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T20:44:02.090Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hayatu', 'Last Name': 'Suleiman', Email: 'hayatunjega@gmail.com', 'Institutional Affiliation': 'Abuja', Date: '2022-10-01T20:46:05.186Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Shamsudeen Abubakar', 'Last Name': 'Umar', Email: 'shamsudeenumar07@gmail.com', 'Institutional Affiliation': 'Nile University of Nigeria', Date: '2022-10-01T20:47:28.613Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ABUBAKAR', 'Last Name': 'MUHAMMAD', Email: 'tallemuhammad24@gmail.com', 'Institutional Affiliation': 'Nasarawa state polytechnic lafia', Date: '2022-10-01T20:47:42.777Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bella', 'Last Name': 'Nyamse', Email: 'bellgee2@yahoo.com', 'Institutional Affiliation': 'Finance', Date: '2022-10-01T20:50:47.727Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'john', 'Last Name': 'moses', Email: 'johnmoses704@gmail.com', 'Institutional Affiliation': 'bluecomfort01@gmail.com', Date: '2022-10-01T20:52:46.532Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bello', 'Last Name': 'Sheriff', Email: 'bellokunle2014@gmail.com', 'Institutional Affiliation': 'Ladoke Akintola university of technology', Date: '2022-10-01T21:00:04.183Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Umar', Email: 'onucheumar@yahoo.com', 'Institutional Affiliation': 'Chainlink', Date: '2022-10-01T21:04:45.138Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Isah', 'Last Name': 'Abdul-Azeez', Email: 'isahabdul16@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T21:14:38.821Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Umar', 'Last Name': 'Shehu', Email: 'umarfaruk54342@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T21:15:06.579Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Zahraddeen', 'Last Name': 'Ahmed', Email: 'Zahraddeen2000@yahoo.com', 'Institutional Affiliation': 'Nitda', Date: '2022-10-01T21:16:46.471Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar Shehu', 'Last Name': 'Shehu', Email: 'umarfaruk54342@gmail.com', 'Institutional Affiliation': 'H&A Advance Solution Ltd', Date: '2022-10-01T21:18:29.617Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Idris', 'Last Name': 'Yakub', Email: 'Idrisyakubu232@gmail.com', 'Institutional Affiliation': 'ABU zaria', Date: '2022-10-01T21:23:40.806Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ismail Muhammad', 'Last Name': 'Idris', Email: 'ismailidrismuhd@gmail.com', 'Institutional Affiliation': 'First Abacus Consultants', Date: '2022-10-01T21:24:03.388Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Nazif', Email: 'caponyx3@gmail.com', 'Institutional Affiliation': 'Federal University Dutse', Date: '2022-10-01T21:24:53.500Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faisal', 'Last Name': 'Aliyu', Email: 'faisaldikko12@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-01T21:34:36.126Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Victoria', 'Last Name': 'Emenike', Email: 'nasokwu@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T21:40:04.414Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Victoria', 'Last Name': 'Emenike', Email: 'nasokwu@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-10-01T21:40:32.964Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Alhassan', 'Last Name': 'Tsalhatu', Email: 'alhassantsalha2015@gmail.com', 'Institutional Affiliation': 'NYSC Corp member', Date: '2022-10-01T21:40:42.559Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Opeloyeru', 'Last Name': 'Batly', Email: 'topebatly@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T21:43:36.348Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mohammed', 'Last Name': 'Lawan', Email: 'muhammadlawan04@gmail.com', 'Institutional Affiliation': 'University of maiduguri', Date: '2022-10-01T21:46:38.664Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jagila', 'Last Name': 'Bello mamza', Email: 'mamsbarbie123@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:00:35.146Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulaziz', 'Last Name': 'Habib', Email: 'abdulazizhabib730@gmail.com', 'Institutional Affiliation': 'A Student', Date: '2022-10-01T22:21:55.749Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Helen', 'Last Name': 'Manoji', Email: 'helenmanoji@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:22:11.261Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'James', 'Last Name': 'Osinachi James', Email: '2Jamesoforu@gmail.com', 'Institutional Affiliation': 'NACOS NATIONAL', Date: '2022-10-01T22:23:08.851Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulaziz', 'Last Name': 'Habib', Email: 'abdulazizhabib730@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:23:39.151Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'James', 'Last Name': 'James', Email: '2jamesoforu@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:24:30.657Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Abdullahi', Email: 'alasose3@gmail.com', 'Institutional Affiliation': 'University of Ilorin, Nigeria', Date: '2022-10-01T22:34:22.080Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mike', 'Last Name': 'Ogieriakhi', Email: 'honourableosas@gmail.com', 'Institutional Affiliation': 'Ministry of Communication and Digital Economy', Date: '2022-10-01T22:36:59.591Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Bemdoo', 'Last Name': 'Sar', Email: 'officialbemsar@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:37:20.398Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Fatima', Email: 'basfat3@gmail.com', 'Institutional Affiliation': 'Nasarawa State University Keffi', Date: '2022-10-01T22:43:46.542Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulkadir', 'Last Name': 'Usman', Email: 'usmanabdulkadir270@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:44:15.612Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Raliya', Email: 'raliyaibrahim111@gmail.com', 'Institutional Affiliation': 'Nasarawa state polytechnic, Lafia', Date: '2022-10-01T22:44:44.396Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ISMAILA', 'Last Name': 'ISA PAIKO', Email: 'iipxcal@aol.com', 'Institutional Affiliation': 'FEDERAL POLYTECHNIC BIDA', Date: '2022-10-01T22:46:04.072Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Fatima Alhaji', 'Last Name': 'Ibrahim', Email: 'afatima927@yahoo.com', 'Institutional Affiliation': 'Nasarawa state polytechnic, Lafia', Date: '2022-10-01T22:46:11.502Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Junaidu', 'Last Name': 'Yusuf', Email: 'junaiduyusuf42@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:48:27.620Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aliyu', 'Last Name': 'Balarabe ahmad', Email: 'aliyubalarabe447@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T22:50:16.348Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Paul', 'Last Name': 'Acheme', Email: 'achemep@yahoo.com', 'Institutional Affiliation': 'UNIVERSITY OF ABUJA', Date: '2022-10-01T22:53:51.090Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Alkali', Email: 'alkalia755@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-01T23:00:26.892Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulrahman', 'Last Name': 'Alkali', Email: 'alkalia755@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T23:01:08.500Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Omoseyin', 'Last Name': 'Faye', Email: 'phaxsam@gmail.com', 'Institutional Affiliation': 'University of Benin', Date: '2022-10-01T23:03:03.909Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Salim', 'Last Name': 'Mora', Email: 'salimmora2@gmail.com', 'Institutional Affiliation': 'Usmanu Danfodio University Sokoto', Date: '2022-10-01T23:12:57.082Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adnan', 'Last Name': 'Ahmad', Email: 'ahmadadnan2235@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T23:22:38.513Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulazeez', 'Last Name': 'Hamza Abdullahi', Email: 'hamzadanchadi@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T23:35:22.981Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Halad', Email: 'haladmkay@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-01T23:41:08.168Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'Sani', Email: 'sanikainuwa1994@gmail.com', 'Institutional Affiliation': 'Jscoeg', Date: '2022-10-01T23:47:58.453Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusuf', 'Last Name': 'Albashir', Email: 'yusuflbshr@gmail.com', 'Institutional Affiliation': 'Fathi Tech Solutions', Date: '2022-10-02T00:09:26.919Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Emmanuel', 'Last Name': 'Orji', Email: 'cemmanuelorji@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T00:14:42.466Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aminu', 'Last Name': 'Usman', Email: 'aminuu111@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T00:21:49.334Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulmalik', 'Last Name': 'Amin', Email: 'bashamin7@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T01:29:56.728Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Muhammad', 'Last Name': 'Dasuki Arabi', Email: 'jalaldasukiarabi@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T02:17:54.175Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aminat', 'Last Name': 'Ayo', Email: 'aminatayo6@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T02:31:32.425Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mike', 'Last Name': 'Samuel Elah', Email: 'simikeworld@gmail.com', 'Institutional Affiliation': 'OnHigh Services Ltd', Date: '2022-10-02T02:51:55.435Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar', 'Last Name': 'Idris', Email: 'idrisumar110@gmail.com', 'Institutional Affiliation': 'Business', Date: '2022-10-02T03:19:18.721Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ikechukwu', 'Last Name': 'Okoli', Email: 'ikechukwuokoli@ymail.com', 'Institutional Affiliation': 'Centre for Strategic Enterprise Development', Date: '2022-10-02T04:13:12.909Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'MUHAMMAD', 'Last Name': 'BAWAH', Email: 'muhammadybawah@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T04:47:27.645Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Idoko', 'Last Name': 'Sunday', Email: 'sundayidoko2012@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T04:54:09.318Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ayuba', 'Last Name': 'Ishaku', Email: 'ishakuayuba1@gmail.com', 'Institutional Affiliation': 'Business', Date: '2022-10-02T05:11:29.325Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ayuba', 'Last Name': 'Ishaku', Email: 'ishakuayuba1@gmail.com', 'Institutional Affiliation': 'ABU', Date: '2022-10-02T05:12:28.841Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ayuba', 'Last Name': 'Ishaku Markus', Email: 'ishakuayuba1@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-02T05:13:35.074Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ayuba', 'Last Name': 'Ishaku Markus', Email: 'ishakuayuba1@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T05:14:10.557Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adakole James', 'Last Name': 'Emmanuel', Email: 'emmanueljames7559@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T05:34:44.846Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Wasiu', 'Last Name': 'Salam', Email: 'baba2ndepeace@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T05:40:41.960Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Tijjani', 'Last Name': 'Ahmed', Email: 'tijjaniahmed007@gmail.com', 'Institutional Affiliation': 'High court of the Federal Capital Territory, Maitama, Abuja', Date: '2022-10-02T05:40:45.098Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kamal', 'Last Name': 'Aliyu', Email: 'kamalaliyu212@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T05:42:34.326Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Musa', 'Last Name': 'Lamido', Email: 'Mlameedo369@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University, Zaria', Date: '2022-10-02T05:57:45.826Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nurudeen', 'Last Name': 'Umar', Email: 'umarnurudeen66@yahoo.com', 'Institutional Affiliation': 'Bayero university kano', Date: '2022-10-02T05:59:54.113Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Musa', 'Last Name': 'Aminu', Email: 'musaaminu553@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T06:01:45.820Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ismail Datti', 'Last Name': 'Saidu', Email: 'ismaildattisaid@gmail.com', 'Institutional Affiliation': 'Action for Sustainable Community Development Initiative', Date: '2022-10-02T06:01:50.769Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdulah', 'Last Name': 'Muhyideen', Email: 'gbengadekola@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T06:03:58.490Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar', 'Last Name': 'Salahudeen', Email: 'wodeen123@gmail.com', 'Institutional Affiliation': 'The federal polytechnic nasarawa', Date: '2022-10-02T06:06:42.114Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Melchizedek', 'Last Name': 'Victor', Email: 'melchizedekvictor1@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T06:24:46.298Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Gideon ereh', 'Last Name': 'Ecclesiastes', Email: 'technologiesgideonite@yahoo.com', 'Institutional Affiliation': 'Gideonite tech', Date: '2022-10-02T06:33:17.661Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Moses', 'Last Name': 'Johnson', Email: 'johnsonmoses71@gmail.com', 'Institutional Affiliation': 'Garkuwa secondary school, Kaduna Nigeria', Date: '2022-10-02T06:35:30.807Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Melchizedek', 'Last Name': 'victor', Email: 'melchizedekvictor1@gmail.com', 'Institutional Affiliation': "Young African Innovators' Hub", Date: '2022-10-02T06:38:05.673Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ridwan', 'Last Name': 'Aliyu', Email: 'ridwanaliyu9@gmail.com', 'Institutional Affiliation': 'Aptech Computer training school', Date: '2022-10-02T06:43:22.949Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Rahina', 'Last Name': 'Abdulkarim', Email: 'araheenart@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T06:46:47.536Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Aondoakaa Tyongi', 'Last Name': 'Emmanuel', Email: 'emmanuelrexa@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T06:54:09.204Z', 'Company\/Organization': 'Peep ICT Enterprise Business Clinic',
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar', 'Last Name': 'Saeed', Email: 'saeedabubakar406@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University, Zaria', Date: '2022-10-02T07:03:31.023Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Peter', 'Last Name': 'Dombin', Email: 'dombin26@gmail.com', 'Institutional Affiliation': 'Bluebelt Multimedia', Date: '2022-10-02T07:07:25.098Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Pete', 'Last Name': 'Edi Dombin', Email: 'dombin26@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T07:08:55.023Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': "Abdul'Azeez", 'Last Name': 'Garba Samaru', Email: 'samaruabdulazeez@gmail.com', 'Institutional Affiliation': 'Foundation of Youths for Smart and Digital Agriculture FYSDA', Date: '2022-10-02T07:09:32.814Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Emmanuel', 'Last Name': 'Ezehiwele', Email: 'emmanuel.ezehiwele@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T07:17:11.632Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mathias', 'Last Name': 'Amodu', Email: 'mathiasamodu123@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T07:18:24.758Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Eva', 'Last Name': 'Chukwunelo', Email: 'evachimada@gmail.com', 'Institutional Affiliation': 'N\/A', Date: '2022-10-02T07:19:38.205Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed', 'Last Name': 'Yusuf', Email: 'yusufkub40@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T07:24:17.985Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Murtala', 'Last Name': 'Akilu', Email: 'murtalaakilu@yaboo.com', 'Institutional Affiliation': 'Non', Date: '2022-10-02T07:31:16.308Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Philip', 'Last Name': 'Ajah', Email: 'Philippak2010@gmail.com', 'Institutional Affiliation': 'Pak and pak ltd', Date: '2022-10-02T07:34:17.691Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Phillip', 'Last Name': 'Ajah', Email: 'Philippak2010@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T07:34:47.518Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sulaiman', 'Last Name': 'Musa Abdullahi', Email: 'smartrogo@gmail.com', 'Institutional Affiliation': 'DOMINEUM BLOCKCHAIN.', Date: '2022-10-02T08:07:40.464Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adamu', 'Last Name': 'Ali Sani', Email: 'adamualisani9@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:09:12.112Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'MOHAMMED', 'Last Name': 'AWWAL', Email: 'awwalmohammedtc@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:10:27.933Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'YAHAYA USMAN', 'Last Name': 'HARUNA', Email: 'yahyadambatta@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:13:06.691Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammed', 'Last Name': 'Mustapha', Email: 'mmoheights@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-02T08:15:22.730Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'nura', 'Last Name': 'khalid Abdulsalam', Email: 'nurak5535@gmail.com', 'Institutional Affiliation': 'FCE KANO', Date: '2022-10-02T08:21:03.158Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'MUSTAPHA', 'Last Name': 'MARIAM', Email: 'mamstj77@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:21:56.435Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mbazu', 'Last Name': 'Daniel', Email: 'mbazudaniel97@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:25:59.847Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Elisha', 'Last Name': 'Bassey', Email: 'elicexy@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:34:50.230Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'IBRAHIM', 'Last Name': 'RABIU', Email: 'alhibb01@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:45:47.241Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Oniya', 'Last Name': 'Olasode Julius', Email: 'juliusoniya@gmail.com', 'Institutional Affiliation': 'Sir J interbiz venture', Date: '2022-10-02T08:52:05.074Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Munzeye', 'Last Name': 'Irimiya', Email: 'munzeyeirimiya@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T08:53:43.039Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abraham', 'Last Name': 'Okon', Email: 'abrahamfridayokon77@gmail.com', 'Institutional Affiliation': 'University', Date: '2022-10-02T08:56:05.085Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Eze', 'Last Name': 'Ebuka', Email: 'ezeebuka524@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T09:15:11.404Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Temidayo', 'Last Name': 'Kingheart', Email: 'betonoladele@outlook.com', 'Institutional Affiliation': 'CPNNI', Date: '2022-10-02T09:20:18.006Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Alkasim', Email: 'ibrahimbnlqasim@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University Zaria', Date: '2022-10-02T09:20:46.257Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'nuhu', 'Last Name': 'Isa', Email: 'isanuhu30@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T09:39:00.845Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sabe Terungwa', 'Last Name': 'Sabe', Email: 'sabeterandco@gmail.com', 'Institutional Affiliation': 'Nigeria Institution of Estate Surveyors and Valuers', Date: '2022-10-02T09:40:33.477Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'KAMAL', 'Last Name': 'AUWAL', Email: 'kamalauwal105@gmail.com', 'Institutional Affiliation': '', Date: '2022-09-24T06:05:49.270Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Paul', 'Last Name': 'Ndibe', Email: 'Paulsonbn92@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T09:52:14.459Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Sadam', 'Last Name': 'Garba Ummah', Email: 'sadamgarbaummah@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T09:59:35.256Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulhakim', 'Last Name': 'Umar', Email: 'umarabdulhakim@ymail.com', 'Institutional Affiliation': 'Bayero University Kano', Date: '2022-10-02T10:09:20.268Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abiola Sunday', 'Last Name': 'Okelola', Email: 'okelolaab@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:12:22.253Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mohammad', 'Last Name': 'Tukur', Email: 'bashtukus@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:25:09.907Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mohammad', 'Last Name': 'Tukur', Email: 'bashtukus@gmail.com', 'Institutional Affiliation': 'Blockchain', Date: '2022-10-02T10:26:35.765Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Jabir', 'Last Name': 'Abdulmumin', Email: 'jabirabdulmumin20@gmail.com', 'Institutional Affiliation': 'Face kontagora', Date: '2022-10-02T10:30:46.195Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nura', 'Last Name': 'Lawal', Email: 'nura4lawal@gmail.com', 'Institutional Affiliation': 'Computer science', Date: '2022-10-02T10:33:29.966Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aminu', 'Last Name': 'Ismail', Email: 'ismail4tech123@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:49:59.098Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'SAKINAT', 'Last Name': 'BELLO', Email: 'sakinatbello93@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:50:55.605Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'musa', 'Last Name': 'IBRAHIM', Email: 'ibrahimmusaabbah12@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:51:36.365Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Huzaifa', 'Last Name': 'Mora', Email: 'huxaifamora@gmail', 'Institutional Affiliation': '', Date: '2022-10-02T10:55:06.247Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Musa', 'Last Name': 'Mustapha', Email: 'musanhussaina@gmail.com', 'Institutional Affiliation': 'Bayero University kano', Date: '2022-10-02T10:55:40.831Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sinan', 'Last Name': 'Ismaila', Email: 'sinanismailaidris@gmail.com', 'Institutional Affiliation': 'National Open University of Nigeria', Date: '2022-10-02T10:56:26.054Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Sadiq', 'Last Name': 'Shafa', Email: 'sadiqshafa767@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:57:42.599Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'AHMAD', 'Last Name': 'HASSAN', Email: 'ahmadhassanrafi@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T10:57:04.038Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Huzaifa', 'Last Name': 'Mora', Email: 'huxaifamora@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:01:55.589Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'isah muhammad', Email: 'maliknaik01@gmail.com', 'Institutional Affiliation': 'Kebbi state university of science and technology alieru', Date: '2022-10-02T11:06:53.935Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Shuaibu', 'Last Name': 'Salisu Gomna', Email: 'salisu.gomna@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:06:55.640Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'isah muhammad', Email: 'maliknaik01@gmail.com', 'Institutional Affiliation': 'Kebbi state university of science and technology alieru', Date: '2022-10-02T11:07:13.387Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulmalik', 'Last Name': 'isah muhammad', Email: 'maliknaik01@gmail.com', 'Institutional Affiliation': 'Kebbi state university of science and technology alieru', Date: '2022-10-02T11:09:32.356Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Muhammad', 'Last Name': 'abubakar idris', Email: 'maidris571@gmail.com', 'Institutional Affiliation': 'Federal college of education technical gombe', Date: '2022-10-02T11:12:23.254Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Ganiyu', 'Last Name': 'Oshidipe', Email: 'ganiyu@bloxmove.ng', 'Institutional Affiliation': '', Date: '2022-10-02T11:13:59.979Z', 'Company\/Organization': 'bloxMoveNG',
}, {
  Categories: 'Master Class', 'First Name': 'Anthony Melvin', 'Last Name': 'Okoro', Email: 'teegreat5@gmail.com', 'Institutional Affiliation': 'National Assembly', Date: '2022-10-02T11:16:31.996Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Cornelius', 'Last Name': 'Bolanle', Email: 'corneliusbolanle@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:20:10.215Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Cornelius', 'Last Name': 'Bolanle', Email: 'corneliusbolanle@yahoo.com', 'Institutional Affiliation': 'University of Abuja', Date: '2022-10-02T11:21:57.845Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'lediju', 'Last Name': 'olaonipekun', Email: 'ledijuolaonipekun@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:22:09.496Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Cornelius', 'Last Name': 'Bolanle', Email: 'corneliusbolanle@yahoo.com', 'Institutional Affiliation': 'Bureau of Public Procurement', Date: '2022-10-02T11:22:40.730Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Zulkarnian', 'Last Name': 'Sarki', Email: 'Sarkioricha@gmail.com', 'Institutional Affiliation': 'Experis Immersive', Date: '2022-10-02T11:25:17.078Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Kehinde', 'Last Name': 'Obafemie', Email: 'obafemikehinde86@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:25:30.370Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Lukman Ahmad', 'Last Name': 'Adam', Email: 'ask4lukman07@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:25:37.680Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'BASHIR', 'Last Name': 'Ahmed', Email: 'ahmedbashirkaya@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:27:09.912Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Egbe', 'Last Name': 'Ojo', Email: 'sirojoegbe@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:27:19.431Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Victor', 'Last Name': 'Bolanle', Email: 'victorayooluwabolanle@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T11:29:57.926Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'John', 'Last Name': 'ogunniyi', Email: 'ogunniyi_ceo@yahoo.com', 'Institutional Affiliation': 'Abiatrics', Date: '2022-10-02T11:43:29.788Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'LAWAN', 'Last Name': 'SANI', Email: 'Lawansani029@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T12:02:01.155Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Buhari', 'Last Name': 'Muhammad Bawa', Email: 'mutabuhari@gmail.com', 'Institutional Affiliation': 'Mb Yelwa and Sons Computer training center', Date: '2022-10-02T12:06:53.721Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Nafiu', 'Last Name': 'Sani Gulumbe', Email: 'nsgulumbe@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T12:10:20.855Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ambrose', 'Last Name': 'Dennis', Email: 'ambrosecdennis@gmail.com', 'Institutional Affiliation': 'TREM', Date: '2022-10-02T12:23:58.496Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yusuf', 'Last Name': 'Olayiwola', Email: 'Olayiwolayusuf02@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T12:24:28.853Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ambrose', 'Last Name': 'Dennis', Email: 'ambrosecdennis@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T12:25:14.229Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Rinku', 'Last Name': 'Raheja', Email: 'rr_141085@yahoo.co.in', 'Institutional Affiliation': '', Date: '2022-10-02T12:39:03.818Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ridwan', 'Last Name': 'AbdulGaniyi', Email: 'rydwangee@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T12:48:23.763Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Echezona', 'Last Name': 'okoye', Email: 'doneche1000@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:05:46.012Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoye', 'Last Name': 'Echezona', Email: 'doneche1000@gmail.com', 'Institutional Affiliation': 'Aptedges Concept Ltd', Date: '2022-10-02T13:07:18.100Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Dozie', 'Last Name': 'Okoye', Email: 'doneche1000@hotmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:08:31.279Z', 'Company\/Organization': 'Aptedges Concept Ltd',
}, {
  Categories: 'Master Class', 'First Name': 'Emmanuel', 'Last Name': 'Adogah', Email: 'adogahemmanuel01@gmail.com', 'Institutional Affiliation': 'Web design', Date: '2022-10-02T13:10:03.909Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Timothy', 'Last Name': 'Alexander', Email: 'alexandertiimmy@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:23:48.591Z', 'Company\/Organization': 'zeelexsignature',
}, {
  Categories: 'Participants', 'First Name': 'Arewa north', 'Last Name': 'Flexing entertainment', Email: 'isiakasanusi53@mail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:32:54.926Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Isiaka', 'Last Name': 'Sanusi', Email: 'isiakasanusi53@mail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:33:32.869Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Afeez', 'Last Name': 'Saka', Email: 'olalekanabdulhafeez@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:33:32.092Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Edoh', 'Last Name': 'Mercy', Email: 'edohmercyene@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:34:16.244Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Francis chigboo', 'Last Name': 'Nwadialor', Email: 'nwadialorfrancischigboo@gmail.com', 'Institutional Affiliation': 'IMAGO DEI Digital world', Date: '2022-10-02T13:41:12.940Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Stanley', 'Last Name': 'Ebo', Email: 'ebostanley24@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:41:59.043Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Daniel', 'Last Name': 'Onyedikachi', Email: 'danielonyedikachi21@gmail.com', 'Institutional Affiliation': 'Michael Okpara University of Agriculture Umudike', Date: '2022-10-02T13:51:34.804Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jemimah', 'Last Name': 'Kantiyok', Email: 'Jemimah4live@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T13:57:59.382Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Usman', 'Last Name': 'Yusuf Shuaibu', Email: 'yusufothmannadabo15@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:02:24.749Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Rabiah', 'Last Name': 'Yusuf', Email: 'rabiahy29@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-10-02T14:12:26.836Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abdullahi', 'Last Name': 'Khalid Umar', Email: 'Khadridproduction@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:17:45.935Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdullahi', 'Last Name': 'Khalid Umar', Email: 'nuambs20abu@gmail.com', 'Institutional Affiliation': 'Ahmadu Bello University', Date: '2022-10-02T14:18:32.962Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ifiokobong', 'Last Name': 'Uko', Email: 'ukoifiokobong@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:21:08.652Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Aisha', 'Last Name': 'Abdullahi', Email: 'humairah2162@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:21:44.380Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Salawat', 'Last Name': 'Animasahun', Email: 'deyhorlahplaceltd@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:30:42.752Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Joshua', 'Last Name': 'Onwujuba', Email: 'ajonnexoil@gmail.com', 'Institutional Affiliation': 'John Galaxy Communications Ltd', Date: '2022-10-02T14:34:06.585Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Jimmy', 'Last Name': 'IDIAGBON', Email: 'sijglolimited@hotmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:36:01.283Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mokutmfon', 'Last Name': 'James', Email: 'mokutsurfs@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T14:45:10.144Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Emmanuel', 'Last Name': 'Yusuf', Email: 'emmanuelisahyusuf@yahoo.com', 'Institutional Affiliation': 'Afrihub', Date: '2022-10-02T14:46:45.205Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Emmanuel', 'Last Name': 'Yusuf', Email: 'emmanuelisahyusuf@yahoo.com', 'Institutional Affiliation': 'Afrihub', Date: '2022-10-02T14:48:01.340Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Olaide', 'Last Name': 'Balogun', Email: 'balogunwarlord@gmail.com', 'Institutional Affiliation': 'baze university', Date: '2022-10-02T14:51:47.556Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Onyoku', 'Last Name': 'Friday', Email: 'jesseonyoku@gmail.com', 'Institutional Affiliation': 'University of Jos', Date: '2022-10-02T15:03:17.325Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Favour Chimaobi', 'Last Name': 'Anele', Email: 'anelec90@gmail.com', 'Institutional Affiliation': 'STDD', Date: '2022-10-02T15:11:10.808Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ibrahim', 'Last Name': 'Umar', Email: 'danfobman@gmail.com', 'Institutional Affiliation': 'Evolution tech', Date: '2022-10-02T15:17:27.092Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Tajudeen', 'Last Name': 'Gali', Email: 'tajudeengali@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-02T15:23:43.746Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Olufemi Kabir', 'Last Name': 'Olanipekun', Email: 'olufemi.olanipekun@gmail.com', 'Institutional Affiliation': 'DigitalCloud Technology Solutions', Date: '2022-10-02T15:30:00.278Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Fatima', 'Last Name': 'Umar', Email: 'Raudha1295@gmail.com', 'Institutional Affiliation': 'Media', Date: '2022-10-02T15:30:22.831Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Kafayat', 'Last Name': 'Usman', Email: 'Kafayatusman55@gmail.com', 'Institutional Affiliation': "Kaffy's Collections", Date: '2022-10-02T15:32:45.947Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrasaq', 'Last Name': 'Shola', Email: 'olanipekun_olufemi@yahoo.com', 'Institutional Affiliation': 'Glamourcurtains Nig Ltd', Date: '2022-10-02T15:34:01.165Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ALI', 'Last Name': 'ABUBAKAR DAPSHIMA', Email: 'dapshimaaa@gmail.com', 'Institutional Affiliation': 'University of Maiduguri', Date: '2022-10-02T15:42:07.585Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'ARISTOTLE', 'Last Name': 'ONUMO', Email: 'aris_t_2000@yahoo.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-02T15:52:12.401Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar', 'Last Name': 'Aliyu Ajah', Email: 'ajahu60@gmail.com', 'Institutional Affiliation': 'Bayero University Kano', Date: '2022-10-02T16:01:02.583Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'chibuzo', 'Last Name': 'ogbonnaya', Email: 'chibuzoogbonnaya01@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:05:06.794Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Chigozie', 'Last Name': 'Iyoke', Email: 'damianiyoke@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:05:34.951Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Felix', 'Last Name': 'Ikor', Email: 'felixikor@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:07:58.971Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ibrahim', 'Last Name': 'Sani', Email: 'ibrahimsani3215@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:14:13.957Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Franklin', 'Last Name': 'Lode', Email: 'de.ideas.associates@gmail.com', 'Institutional Affiliation': 'None', Date: '2022-10-02T16:32:41.963Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yahaya', 'Last Name': 'Lawal karbaba', Email: 'yahayalawalkarbaba@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:34:55.152Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yahaya', 'Last Name': 'Lawal karbaba', Email: 'yahayalawalkarbaba@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:35:42.530Z', 'Company\/Organization': null,
}, {
  Categories: 'Exhibitor', 'First Name': 'Yahaya', 'Last Name': 'Lawal karbaba', Email: 'yahayalawalkarbaba@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:36:23.365Z', 'Company\/Organization': 'Karbaba Global Concept Nig. Ltd.',
}, {
  Categories: 'Participants', 'First Name': 'Khalid', 'Last Name': 'Yero', Email: 'khalideen01@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:50:13.101Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ahmed Garba', 'Last Name': 'Amed', Email: 'tijo150@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T16:53:47.832Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Munachi', 'Last Name': 'Onyekachi', Email: 'Onyekamunachi5@gmail.co', 'Institutional Affiliation': 'SSCE', Date: '2022-10-02T17:25:46.563Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adeyemi', 'Last Name': 'Adekunle', Email: 'klaysabfilmz@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T17:29:03.875Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Olugbenga', 'Last Name': 'Omofe', Email: 'gbengaomofe@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T17:45:38.863Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Olanipekun Kabir', 'Last Name': 'Olufemi', Email: 'digitalcloud.voip@gmail.com', 'Institutional Affiliation': 'DigitalCloud Technology', Date: '2022-10-02T18:10:39.027Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abba', 'Last Name': 'Sunusi', Email: 'abbasunusi1234@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T18:13:23.125Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Johnson', 'Last Name': 'Dickson', Email: 'dicksonjohnson35@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T18:30:38.887Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Jubril A.', 'Last Name': 'Akintayo', Email: 'jubrilakintayo04@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-02T18:34:03.473Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'maryam', 'Last Name': 'Gidado', Email: 'maryamisag@gmail.com', 'Institutional Affiliation': 'National Open University of Nigeria', Date: '2022-10-02T18:44:29.874Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abiola', 'Last Name': 'Bolaji', Email: 'abiolabolaji3@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T18:52:03.699Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'IBRAHIM', 'Last Name': 'KOLOMI', Email: 'ibrahimkolomi1@gmail.com', 'Institutional Affiliation': 'Primary', Date: '2022-10-02T18:58:31.536Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Ebitimi', 'Last Name': 'Uge', Email: 'ebitimiuge@gmail.com', 'Institutional Affiliation': 'UE Firms Limited', Date: '2022-10-02T19:01:13.642Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sani Muhammad', 'Last Name': 'Bala', Email: 'basmoh1@yahoo.com', 'Institutional Affiliation': 'FAAN', Date: '2022-10-02T19:04:24.221Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Bello', 'Last Name': 'Danzaria', Email: 'dnxaria12@gmail.com', 'Institutional Affiliation': 'Aviation', Date: '2022-10-02T19:06:05.765Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sunday', 'Last Name': 'Odeleye', Email: 'sundayolabisiodeleye@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-02T19:11:29.672Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoro Princewill', 'Last Name': 'Nnamdi', Email: 'bookprincewillorab@gmail.com', 'Institutional Affiliation': 'I wabt to Learn something', Date: '2022-10-02T19:25:54.941Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoro Princewill', 'Last Name': 'Nnamdi', Email: 'bookprincewillorab@gmail.com', 'Institutional Affiliation': 'Bluckchain', Date: '2022-10-02T19:26:32.860Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoro Princewill', 'Last Name': 'Nnamdi', Email: 'bookprincewillorab@gmail.com', 'Institutional Affiliation': 'Crypto', Date: '2022-10-02T19:30:13.137Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoro Princewill', 'Last Name': 'Nnamdi', Email: 'bookprincewillorab@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-02T19:30:26.650Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Okoro Princewill', 'Last Name': 'Nnamdi', Email: 'bookprincewillorab@gmail.com', 'Institutional Affiliation': 'Nil', Date: '2022-10-02T19:30:36.465Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Oliver', 'Last Name': 'Ayim', Email: 'ayimoliver@gmail.com', 'Institutional Affiliation': 'Hub Investment Iniative', Date: '2022-10-02T19:33:02.552Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Faruk', 'Last Name': 'Tahir', Email: 'faruktahir001@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T19:43:20.748Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Musa', 'Last Name': 'Wada', Email: 'musamwada@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T19:46:44.279Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Musa musa', 'Last Name': 'Wada', Email: 'musamwada@gmail.com', 'Institutional Affiliation': 'Alqalam university katsina', Date: '2022-10-02T19:49:15.902Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Williams', 'Last Name': 'Yaji', Email: 'wnyaji@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T20:03:12.759Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Okechukwu', 'Last Name': 'Ikeogu', Email: 'ikeoguokechukwu935@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T20:04:08.597Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB Ltd', Date: '2022-10-02T20:14:06.430Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Bank', Date: '2022-10-02T20:14:29.146Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Banking', Date: '2022-10-02T20:14:52.118Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-02T20:15:26.492Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB Ltd.', Date: '2022-10-02T20:16:32.062Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahmani', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB', Date: '2022-10-02T20:16:48.432Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': "Shi'itu", 'Last Name': 'Abubakar', Email: 'Warriorking2919@gmail.com', 'Institutional Affiliation': 'Shehu Shagari university of education Sokoto', Date: '2022-10-02T20:49:41.205Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Digital Nigeria', Date: '2022-10-02T20:52:27.332Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Shittu', 'Last Name': 'Abubakar', Email: 'rashagwad@gmail.com', 'Institutional Affiliation': 'Shehu Shagari university of education Sokoto', Date: '2022-10-02T20:55:31.653Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Yusuf', 'Last Name': 'Muhammed Saidu', Email: 'yusufyk2017@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T20:59:08.816Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Sandra', 'Last Name': 'Ukeh', Email: 'sandrabuta@yahoo.com', 'Institutional Affiliation': 'NITDA', Date: '2022-10-02T20:59:52.883Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Private sector', Date: '2022-10-02T21:00:56.170Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Yusuf', 'Last Name': 'Muhammed Saidu', Email: 'Yusufmuhammedyk@gmail.com', 'Institutional Affiliation': 'College Of Administration Management And Technology, Potiskum', Date: '2022-10-02T21:00:57.074Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB', Date: '2022-10-02T21:01:38.716Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB Ltd.', Date: '2022-10-02T21:02:54.187Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'MAHMOUD', 'Last Name': 'ABUBAKAR MOHAMMED', Email: 'mmohammedabubakar47@gmail.com', 'Institutional Affiliation': 'University of Abuja', Date: '2022-10-02T21:10:37.830Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abdulrahman', 'Last Name': 'Salihu Mailafiya', Email: 'abdulmailife@gmail.com', 'Institutional Affiliation': 'Garki MFB Ltd.', Date: '2022-10-02T21:16:58.670Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Adenekan', 'Last Name': 'Oluwasegun', Email: 'adenekanoluwasegun2018@gmail.com', 'Institutional Affiliation': 'Elizade university', Date: '2022-10-02T21:28:58.242Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Mathias', 'Last Name': 'Duya', Email: 'duyamathias@gmail.com', 'Institutional Affiliation': 'Nasarawa State University Keffi', Date: '2022-10-02T21:33:08.953Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Mohammed', 'Last Name': 'Abubakar', Email: 'princeahlan83@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T21:33:39.812Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Abel', 'Last Name': 'Goji', Email: 'abel.goji@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T21:41:23.206Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Adule', 'Last Name': 'King Vokpee', Email: 'kingadule@yahoo.com', 'Institutional Affiliation': '', Date: '2022-10-02T22:02:48.626Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nuruddeen', 'Last Name': 'Hashim', Email: 'hashimnuruddeen@gmail.com', 'Institutional Affiliation': 'The Federal Polytechnic Bauchi', Date: '2022-10-02T22:18:33.744Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Samuel', 'Last Name': 'Moses Osabonya', Email: 'smosabonya1509@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T22:22:16.858Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Abubakar', 'Last Name': 'Mohammed', Email: 'asmmohammed88@gmail.com', 'Institutional Affiliation': 'University of Maiduguri, borno state', Date: '2022-10-02T22:30:35.152Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Nuruddeen', 'Last Name': 'Hashim', Email: 'hashimnuruddeen@gmail.com', 'Institutional Affiliation': 'The Federal Polytechnic Bauchi', Date: '2022-10-02T22:48:00.927Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'ibrahim', 'Last Name': 'zakari ibrahim', Email: 'ibrahimzakarionline@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-02T22:53:36.156Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Umar', 'Last Name': 'Abdulkadir', Email: 'umarabdulkadir011@gmail.com', 'Institutional Affiliation': 'Abu Zaria', Date: '2022-10-02T23:19:15.314Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Ismail', 'Last Name': 'Gwarzo', Email: 'ismail.gwarzo226@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-03T00:04:03.999Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Kingsley', 'Last Name': 'Godwin', Email: 'godwinkingsleyobinna@gmail.com', 'Institutional Affiliation': 'ImpactMarket', Date: '2022-10-03T00:36:09.136Z', 'Company\/Organization': null,
}, {
  Categories: 'Participants', 'First Name': 'Hassan Usman', 'Last Name': 'Hassan', Email: 'hassanusman4u@gmail.com', 'Institutional Affiliation': '', Date: '2022-10-03T00:37:40.406Z', 'Company\/Organization': null,
}, {
  Categories: 'Master Class', 'First Name': 'Hassan Usman', 'Last Name': 'Hassan', Email: 'hassanusman4u@gmail.com', 'Institutional Affiliation': 'Investments and Securities Tribunal', Date: '2022-10-03T00:39:05.600Z', 'Company\/Organization': null,
}];
// console.log(data.length)

const emails = [];

const isEmail = (data, inputEmail) => {
  const emails = [];
  let answer = false;

  for (let x = 0; x < data.length; x++) {
    for (const [key, value] of Object.entries(data[x])) {
      if (key == 'Email') {
        emails.push(value);
      }
    }
  }

  for (let y = 0; y < emails.length; y++) {
    if (inputEmail == emails[y]) answer = true;
  }

  return answer;
};

const getSheat = () => {
  fetch('https://sheet.best/api/sheets/5f05d562-cf94-492b-aac8-195d3c57ec67')
    .then((res) => (res.json()))
    .then((data) => console.log(data));
};

getSheat();

// console.log(isEmail(datas, "basarakej@gmail.comm"));