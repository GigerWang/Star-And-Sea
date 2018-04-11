var calendar = new LCalendar();
		calendar.init({
			'trigger': '#stu_date', //标签id
			'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
			'minDate': (new Date().getFullYear()-30) + '-' + 1 + '-' + 1, //最小日期
			'maxDate': (new Date().getFullYear()+0) + '-' + 12 + '-' + 31 //最大日期
		});