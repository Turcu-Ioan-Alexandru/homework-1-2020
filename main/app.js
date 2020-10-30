const distance = (a, b) => {

	//TODO: implementați funcția
	//TODO: implement the function

	if(typeof a  === "string" && typeof b  === "string")
	{
		if(a === "" && b ==="")
			{
				return 0;
			}
			else
			{
				const matrix= [];
				for(let i = 0; i < a.length + 1; i++)
				{
					const row = [];
					for(let j = 0; j < b.length + 1; j++)
					{
						row.push(j);
					}
					row[0] = i;
					matrix.push(row);
				}

				for(let i = 1; i < a.length + 1; i++)
				{
					for(let j = 1; j < b.length + 1; j++)
					{
						if(a[i - 1] == b[j - 1])
						{
							matrix[i][j] = matrix[i - 1][j - 1];
						}
						else
						{
							matrix[i][j] = 1 + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]);
						}
					}
				}

				return matrix[a.length][b.length];
			}	
	}
	else
	{
		throw new TypeError("InvalidType");
	}
}

module.exports.distance = distance