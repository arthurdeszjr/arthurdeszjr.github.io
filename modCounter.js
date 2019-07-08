var count = 0, total = 0;

function Counter ()
{
	total += 1;
	return total; 
}

function CountImages (t)
{
	if (t != null)
	{
		total = t;
	}

	count += 1;
	document.write(count + " / " + total);
}
