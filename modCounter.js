var count = 0, total = 0;

function CountImages (t)
{
	if (t != null)
	{
		total = t;
	}

	count += 1;
	document.write(count + " / " + total);
}

var number = 0
function CountBlocks (t)
{
	if (t != null)
	{
		total = t;
	}
	number += 1;
	return number
}
