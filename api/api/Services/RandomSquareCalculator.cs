
using System;

namespace api.Services
{
    public class RandomSquareCalculator
    {

        public double Calculate(int n) => n <= 0
            ? throw new NotSupportedException($"0 is not supported")
            : CalculateSquare(n);

        private static double CalculateSquare(int max)
        {
            var n = new RandomNumber().Get(max);
            return Math.Pow(n, 2);
        }
    }
}