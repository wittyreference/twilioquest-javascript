const numberInput = Number(process.argv[2])

if ((numberInput % 3 === 0) && (numberInput % 5 === 0))
{
  console.log('JavaScript')
}

else if (numberInput % 3 === 0)
{
  console.log('Java')
}

else if (numberInput % 5 === 0)
{
  console.log('Script')
}

else
{
  console.log(numberInput)
}