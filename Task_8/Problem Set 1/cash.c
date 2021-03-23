#include <cs50.h>
#include <stdio.h>
int main(void)
{
    int n;
    float n:
    do
    {
        n=get_float("cash:");
    }
    while( n<0);
    
    n=n*1000;
    n=round(n);
    
    while(n>0)
    {
        if(n>100)
        {
          n=n-100;
          c=c+1;
        }
       else if(n>50)
       {
          n=n-50;
          c=c+1;
       }
       else if(n>25)
      {
       n=n-25;
       c=c+1;
      }
    else
      {
        n=n-1;
        c=c+1;
      }
    }
    printf("Coins left: %d\n", c);
} 
