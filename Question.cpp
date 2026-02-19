#include <iostream>
#include<string>
#include<unordered_map>
using namespace std;

                                //  O(n)   =  O(1)
// 1)
            /*        string unique(string str)
                    {
                        unordered_map<char,int> visit;
                        string final = "";
                        for(auto x : str)
                        {
                            visit[x]++;
                        }
                        for(auto &y : visit)
                        {
                            if(y.second == 1) { final += y;}
                        }
                        return final;
                    }

                     int main()
                     {
                         string name = "vallabh";
                         cout << " " << unique(name) << " " << endl;
                         return 0;
                     }
            */
// 2)
    /*        int trav(string str)                                        // O(n) O(1)
            {
                unordered_map<char,int> vowels =
                {
                    {'a' , 0},
                    {'e' , 0},
                    {'i' , 0},
                    {'o' , 0},
                    {'u' , 0}
                };

                string new_str = "";

                for(auto x : str)
                {
                    char ch1 = tolower(x);
                    if( vowels.find(ch1)  != vowels.end() )
                    {
                        vowels[ch1]++;
                    }
                }

                return sum_values(vowels);
            }
            int sum_values(unordered_map<char,int>  mp )
            {
                int sum = 0;
                for(auto &p : mp)
                {
                    sum += p.second;
                }
                return sum;
            }

            int main()
            {
                string s_1 = "vallabh";
                cout << trav(s_1) << endl;

                return 0;
        }   
*/



// 3)

void reverse_string(string s )
{
    int l = 0 , r = s.length()-1;

    while(l < r)
    {
        if(s[l] == ' ') { l++; continue;}
        if(s[r] == ' ') { r--; continue;}
        s[l] ^= s[r];
        s[r] ^= s[l];
        s[l] ^= s[r];
        r--;
        l++;
    }
    cout << s << endl;
    return;
}

void patter(int n)
{
    for(int i = 0 ; i < n ; i++)
    {
        for(int j = i ; i < n ; j++)
        {
            cout << i - n ;
        }
    }
}

string unique(string str)
{
    unordered_map<char,int> visit;
    string final = "";
    for(auto x : str)
    {
        visit[x]++;
    }
    for(auto &y : visit)
    {
        if(y.second == 1) { final += y.first;}
    }
    return final;
}

int main()
{
    string s1;
   // cin >> s1;
    reverse_string("Abhishek is a boy");

    patter(4);
    cout << unique("vallabh") << endl;

}


