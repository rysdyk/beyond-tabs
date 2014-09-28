function drawFrets(){
	$('.fretboard-bg').each( function(){
		if (this.getContext)
		{
			var ctx = this.getContext('2d');
			
			for (i=0; i<4; i++)
			{
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(15+i*44, 0);
				ctx.lineTo(15+i*44, 90);
				ctx.strokeStyle = '#c3c3c3';
				ctx.stroke();
			}
		
			for (i=0; i<6; i++)
			{
				ctx.lineWidth = 1 + i/2;
				ctx.beginPath();
				ctx.moveTo(5, 5+i*14);
				ctx.lineTo(180, 5+i*14);
				ctx.strokeStyle = '#000';
				ctx.stroke();
			}
		}
		else
		{
			alert("Your browser is needs to be updated. Please visit BrowseHappy.com to get a modern, safe browser.")
		}
	})
	
	$('.fretboard-whole-bg').each( function(){
		if (this.getContext)
		{
			var ctx = this.getContext('2d');
			
			for (i=0; i<13; i++)
			{
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(50+i*70, 0);
				ctx.lineTo(50+i*70, 90);
				ctx.strokeStyle = '#c3c3c3';
				ctx.stroke();
			}
		
			for (i=0; i<6; i++)
			{
				ctx.lineWidth = 1 + i/2;
				ctx.beginPath();
				ctx.moveTo(5, 5+i*14);
				ctx.lineTo(960, 5+i*14);
				ctx.strokeStyle = '#000';
				ctx.stroke();
			}
		}
		else
		{
			alert("Your browser is needs to be updated. Please visit BrowseHappy.com to get a modern, safe browser.")
		}
	})
	
}