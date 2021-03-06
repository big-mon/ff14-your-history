import { CharacterBase } from "../../lib/CharacterBase";
import { CharacterName } from "../molecules/CharacterName";
import { CharacterType } from "../molecules/CharacterType";
import { CharacterServer } from "../molecules/CharacterServer";
import { CharacterFreeCompany } from "../molecules/CharacterFreeCompany";
import { CharacterPortrait } from "../molecules/CharacterPortrait";
import { CharacterAvatar } from "../molecules/CharacterAvatar";

const tmpJson = `{
  "Achievements": {
    "List": [
      { "Date": 1540671504, "ID": 1 },
      { "Date": 1540719038, "ID": 2 },
      { "Date": 1540736935, "ID": 3 },
      { "Date": 1541310605, "ID": 4 },
      { "Date": 1542984198, "ID": 5 },
      { "Date": 1571680459, "ID": 6 },
      { "Date": 1566143338, "ID": 800 },
      { "Date": 1582438895, "ID": 801 },
      { "Date": 1599292035, "ID": 802 },
      { "Date": 1602948708, "ID": 1362 },
      { "Date": 1580482720, "ID": 1926 },
      { "Date": 1597847790, "ID": 1928 },
      { "Date": 1566488276, "ID": 1930 },
      { "Date": 1599373279, "ID": 1931 },
      { "Date": 1566229260, "ID": 2337 },
      { "Date": 1573313597, "ID": 2339 },
      { "Date": 1573313597, "ID": 2340 },
      { "Date": 1569144904, "ID": 2341 },
      { "Date": 1566233926, "ID": 2342 },
      { "Date": 1573328696, "ID": 2346 },
      { "Date": 1540736935, "ID": 803 },
      { "Date": 1566229260, "ID": 804 },
      { "Date": 1581261612, "ID": 805 },
      { "Date": 1540911124, "ID": 808 },
      { "Date": 1547951818, "ID": 809 },
      { "Date": 1547951818, "ID": 810 },
      { "Date": 1547951818, "ID": 885 },
      { "Date": 1600617072, "ID": 919 },
      { "Date": 1600775627, "ID": 920 },
      { "Date": 1584459982, "ID": 1953 },
      { "Date": 1580566338, "ID": 1959 },
      { "Date": 1584544071, "ID": 2390 },
      { "Date": 1540826520, "ID": 739 },
      { "Date": 1541084473, "ID": 740 },
      { "Date": 1541251219, "ID": 741 },
      { "Date": 1541310605, "ID": 1222 },
      { "Date": 1541687923, "ID": 1223 },
      { "Date": 1542119421, "ID": 1224 },
      { "Date": 1540740162, "ID": 742 },
      { "Date": 1541084473, "ID": 743 },
      { "Date": 1541827591, "ID": 744 },
      { "Date": 1545491760, "ID": 745 },
      { "Date": 1575991098, "ID": 746 },
      { "Date": 1540987352, "ID": 1576 },
      { "Date": 1540990424, "ID": 1577 },
      { "Date": 1543056408, "ID": 1578 },
      { "Date": 1566743777, "ID": 1579 },
      { "Date": 1566825441, "ID": 1580 },
      { "Date": 1540987352, "ID": 1661 },
      { "Date": 1540987352, "ID": 1665 },
      { "Date": 1580023084, "ID": 2047 },
      { "Date": 1580024234, "ID": 2048 },
      { "Date": 1580026353, "ID": 2049 },
      { "Date": 1545143999, "ID": 855 },
      { "Date": 1542035958, "ID": 856 },
      { "Date": 1544719426, "ID": 857 },
      { "Date": 1545464673, "ID": 893 },
      { "Date": 1545464673, "ID": 894 },
      { "Date": 1545464673, "ID": 994 },
      { "Date": 1545464673, "ID": 1045 },
      { "Date": 1541344837, "ID": 1064 },
      { "Date": 1575781425, "ID": 1066 },
      { "Date": 1541921809, "ID": 1067 },
      { "Date": 1541921809, "ID": 1065 },
      { "Date": 1545491760, "ID": 1220 },
      { "Date": 1545491760, "ID": 1221 },
      { "Date": 1545495908, "ID": 1400 },
      { "Date": 1569765225, "ID": 1601 },
      { "Date": 1577985824, "ID": 1636 },
      { "Date": 1545565170, "ID": 1685 },
      { "Date": 1546096452, "ID": 1901 },
      { "Date": 1545578088, "ID": 1902 },
      { "Date": 1545552367, "ID": 2023 },
      { "Date": 1599243601, "ID": 2117 },
      { "Date": 1566671676, "ID": 2385 },
      { "Date": 1572189568, "ID": 2386 },
      { "Date": 1576266570, "ID": 2441 },
      { "Date": 1582454599, "ID": 2590 },
      { "Date": 1597322439, "ID": 2621 },
      { "Date": 1581780247, "ID": 2109 },
      { "Date": 1570979878, "ID": 747 },
      { "Date": 1542478758, "ID": 883 },
      { "Date": 1571046981, "ID": 887 },
      { "Date": 1571727159, "ID": 888 },
      { "Date": 1542515572, "ID": 995 },
      { "Date": 1571719104, "ID": 1040 },
      { "Date": 1542536396, "ID": 1068 },
      { "Date": 1544622670, "ID": 1228 },
      { "Date": 1573918096, "ID": 1231 },
      { "Date": 1573918096, "ID": 1232 },
      { "Date": 1544289596, "ID": 1399 },
      { "Date": 1569226831, "ID": 1476 },
      { "Date": 1571763842, "ID": 1477 },
      { "Date": 1573918096, "ID": 1479 },
      { "Date": 1544341106, "ID": 1574 },
      { "Date": 1572158188, "ID": 1639 },
      { "Date": 1604417706, "ID": 1640 },
      { "Date": 1574004535, "ID": 1642 },
      { "Date": 1574004535, "ID": 1643 },
      { "Date": 1544448400, "ID": 1689 },
      { "Date": 1544459288, "ID": 1895 },
      { "Date": 1544627726, "ID": 1992 },
      { "Date": 1544541463, "ID": 2024 },
      { "Date": 1579984095, "ID": 2027 },
      { "Date": 1545062532, "ID": 2106 },
      { "Date": 1544546350, "ID": 2118 },
      { "Date": 1571752599, "ID": 2119 },
      { "Date": 1547294015, "ID": 2164 },
      { "Date": 1566099119, "ID": 2409 },
      { "Date": 1566920342, "ID": 2410 },
      { "Date": 1569333369, "ID": 2411 },
      { "Date": 1581347952, "ID": 2412 },
      { "Date": 1572361639, "ID": 2443 },
      { "Date": 1582044257, "ID": 2591 },
      { "Date": 1584459982, "ID": 2592 },
      { "Date": 1606497588, "ID": 2593 },
      { "Date": 1597158820, "ID": 2622 },
      { "Date": 1618928448, "ID": 2719 },
      { "Date": 1618602781, "ID": 2847 },
      { "Date": 1546464816, "ID": 1911 },
      { "Date": 1546464816, "ID": 1914 },
      { "Date": 1572795391, "ID": 1912 },
      { "Date": 1579942496, "ID": 979 },
      { "Date": 1543558551, "ID": 983 },
      { "Date": 1547951818, "ID": 984 },
      { "Date": 1572015083, "ID": 985 },
      { "Date": 1569252014, "ID": 2350 },
      { "Date": 1569765225, "ID": 987 },
      { "Date": 1580482720, "ID": 988 },
      { "Date": 1616340528, "ID": 2397 },
      { "Date": 1573409162, "ID": 1548 },
      { "Date": 1572812697, "ID": 1944 },
      { "Date": 1573399844, "ID": 1945 },
      { "Date": 1580482720, "ID": 1946 },
      { "Date": 1574090803, "ID": 1948 },
      { "Date": 1572812697, "ID": 1980 },
      { "Date": 1573409162, "ID": 1981 },
      { "Date": 1574090803, "ID": 1982 },
      { "Date": 1572812697, "ID": 2132 },
      { "Date": 1573399844, "ID": 2133 },
      { "Date": 1573745789, "ID": 2134 },
      { "Date": 1574090803, "ID": 2135 },
      { "Date": 1569098553, "ID": 2401 },
      { "Date": 1569683978, "ID": 2402 },
      { "Date": 1570373628, "ID": 2403 },
      { "Date": 1573399844, "ID": 2404 },
      { "Date": 1569683978, "ID": 2405 },
      { "Date": 1581780247, "ID": 2406 },
      { "Date": 1616340528, "ID": 2740 },
      { "Date": 1618675629, "ID": 2741 },
      { "Date": 1616340528, "ID": 2744 },
      { "Date": 1602685802, "ID": 2676 },
      { "Date": 1603006646, "ID": 2677 },
      { "Date": 1603041854, "ID": 2678 },
      { "Date": 1603006646, "ID": 2672 },
      { "Date": 1603022704, "ID": 2680 },
      { "Date": 1602685802, "ID": 2687 },
      { "Date": 1603041854, "ID": 2688 },
      { "Date": 1542208692, "ID": 813 },
      { "Date": 1542208692, "ID": 814 },
      { "Date": 1542906902, "ID": 815 },
      { "Date": 1544706545, "ID": 816 },
      { "Date": 1544022928, "ID": 1772 },
      { "Date": 1565884110, "ID": 843 },
      { "Date": 1565884110, "ID": 849 },
      { "Date": 1565884110, "ID": 1435 },
      { "Date": 1565884110, "ID": 1441 },
      { "Date": 1570115929, "ID": 1747 },
      { "Date": 1565884110, "ID": 1752 },
      { "Date": 1542208692, "ID": 930 },
      { "Date": 1544016620, "ID": 931 },
      { "Date": 1577558055, "ID": 932 },
      { "Date": 1542208692, "ID": 936 },
      { "Date": 1542283715, "ID": 954 },
      { "Date": 1542807570, "ID": 955 },
      { "Date": 1543062407, "ID": 956 },
      { "Date": 1545139030, "ID": 957 },
      { "Date": 1542283715, "ID": 959 },
      { "Date": 1543062407, "ID": 960 },
      { "Date": 1544622670, "ID": 961 },
      { "Date": 1542476159, "ID": 1073 },
      { "Date": 1543136274, "ID": 1196 },
      { "Date": 1543136274, "ID": 1366 },
      { "Date": 1542208692, "ID": 1559 },
      { "Date": 1542208692, "ID": 2061 },
      { "Date": 1543503558, "ID": 2062 },
      { "Date": 1575986056, "ID": 2477 },
      { "Date": 1540826520, "ID": 590 },
      { "Date": 1566734448, "ID": 1556 },
      { "Date": 1597508734, "ID": 1557 },
      { "Date": 1540826520, "ID": 527 },
      { "Date": 1541191395, "ID": 530 },
      { "Date": 1543673004, "ID": 531 },
      { "Date": 1545491760, "ID": 532 },
      { "Date": 1566402050, "ID": 533 },
      { "Date": 1545139030, "ID": 554 },
      { "Date": 1545552367, "ID": 555 },
      { "Date": 1567265383, "ID": 556 },
      { "Date": 1571930238, "ID": 557 },
      { "Date": 1545405326, "ID": 566 },
      { "Date": 1546062719, "ID": 567 },
      { "Date": 1568428620, "ID": 568 },
      { "Date": 1572444441, "ID": 569 },
      { "Date": 1545667809, "ID": 736 },
      { "Date": 1540719038, "ID": 647 },
      { "Date": 1540719038, "ID": 648 },
      { "Date": 1541005127, "ID": 649 },
      { "Date": 1540719038, "ID": 650 },
      { "Date": 1540911124, "ID": 651 },
      { "Date": 1541226603, "ID": 677 },
      { "Date": 1540653792, "ID": 657 },
      { "Date": 1540695876, "ID": 658 },
      { "Date": 1540671504, "ID": 659 },
      { "Date": 1540671504, "ID": 660 },
      { "Date": 1540729463, "ID": 652 },
      { "Date": 1540719038, "ID": 653 },
      { "Date": 1540736935, "ID": 654 },
      { "Date": 1540826520, "ID": 655 },
      { "Date": 1541191395, "ID": 656 },
      { "Date": 1541092389, "ID": 661 },
      { "Date": 1544973271, "ID": 1202 },
      { "Date": 1541191395, "ID": 662 },
      { "Date": 1542471089, "ID": 1206 },
      { "Date": 1542443316, "ID": 1207 },
      { "Date": 1544337584, "ID": 1203 },
      { "Date": 1543738263, "ID": 1204 },
      { "Date": 1542996511, "ID": 1205 },
      { "Date": 1544546350, "ID": 1877 },
      { "Date": 1543723587, "ID": 1878 },
      { "Date": 1569511168, "ID": 1879 },
      { "Date": 1543159024, "ID": 1880 },
      { "Date": 1544016620, "ID": 1881 },
      { "Date": 1569129302, "ID": 1882 },
      { "Date": 1540727272, "ID": 669 },
      { "Date": 1567780901, "ID": 666 },
      { "Date": 1540744292, "ID": 667 },
      { "Date": 1540911124, "ID": 673 },
      { "Date": 1566740172, "ID": 664 },
      { "Date": 1566623987, "ID": 668 },
      { "Date": 1541084473, "ID": 674 },
      { "Date": 1541169470, "ID": 672 },
      { "Date": 1606487175, "ID": 675 },
      { "Date": 1541226603, "ID": 676 },
      { "Date": 1541230443, "ID": 665 },
      { "Date": 1541238448, "ID": 678 },
      { "Date": 1541245736, "ID": 679 },
      { "Date": 1541261822, "ID": 671 },
      { "Date": 1597344733, "ID": 873 },
      { "Date": 1541261822, "ID": 871 },
      { "Date": 1541270469, "ID": 872 },
      { "Date": 1541270469, "ID": 897 },
      { "Date": 1541310605, "ID": 895 },
      { "Date": 1541310605, "ID": 896 },
      { "Date": 1541512961, "ID": 993 },
      { "Date": 1541302799, "ID": 991 },
      { "Date": 1541687923, "ID": 992 },
      { "Date": 1541838702, "ID": 1039 },
      { "Date": 1541335424, "ID": 1038 },
      { "Date": 1567793996, "ID": 1037 },
      { "Date": 1541877005, "ID": 1072 },
      { "Date": 1541344837, "ID": 1071 },
      { "Date": 1541335424, "ID": 1070 },
      { "Date": 1542119421, "ID": 1208 },
      { "Date": 1542119421, "ID": 1209 },
      { "Date": 1542214085, "ID": 1210 },
      { "Date": 1542294283, "ID": 1211 },
      { "Date": 1542443316, "ID": 1212 },
      { "Date": 1542447287, "ID": 1213 },
      { "Date": 1542472513, "ID": 1214 },
      { "Date": 1542522718, "ID": 1215 },
      { "Date": 1542973273, "ID": 1402 },
      { "Date": 1544100888, "ID": 1403 },
      { "Date": 1542727187, "ID": 1486 },
      { "Date": 1542976230, "ID": 1487 },
      { "Date": 1542818079, "ID": 1599 },
      { "Date": 1542976230, "ID": 1600 },
      { "Date": 1542915062, "ID": 1637 },
      { "Date": 1542984198, "ID": 1638 },
      { "Date": 1542955944, "ID": 1686 },
      { "Date": 1542991463, "ID": 1687 },
      { "Date": 1543122176, "ID": 1883 },
      { "Date": 1543147601, "ID": 1884 },
      { "Date": 1543514970, "ID": 1885 },
      { "Date": 1543586049, "ID": 1886 },
      { "Date": 1543665450, "ID": 1887 },
      { "Date": 1543738263, "ID": 1888 },
      { "Date": 1543741129, "ID": 1889 },
      { "Date": 1543741129, "ID": 1890 },
      { "Date": 1543758080, "ID": 1988 },
      { "Date": 1544274005, "ID": 2021 },
      { "Date": 1544285384, "ID": 2022 },
      { "Date": 1544337584, "ID": 2057 },
      { "Date": 1544109360, "ID": 2115 },
      { "Date": 1544263083, "ID": 2116 },
      { "Date": 1547304145, "ID": 2162 },
      { "Date": 1565459852, "ID": 2377 },
      { "Date": 1565547725, "ID": 2378 },
      { "Date": 1565616048, "ID": 2379 },
      { "Date": 1565798321, "ID": 2380 },
      { "Date": 1565809771, "ID": 2381 },
      { "Date": 1565884110, "ID": 2382 },
      { "Date": 1565889798, "ID": 2383 },
      { "Date": 1565893877, "ID": 2384 },
      { "Date": 1572444441, "ID": 2440 },
      { "Date": 1582114364, "ID": 2589 },
      { "Date": 1597232564, "ID": 2618 },
      { "Date": 1618659600, "ID": 2717 },
      { "Date": 1542478758, "ID": 884 },
      { "Date": 1542515572, "ID": 996 },
      { "Date": 1542536396, "ID": 1069 },
      { "Date": 1572103219, "ID": 680 },
      { "Date": 1570979878, "ID": 681 },
      { "Date": 1570979878, "ID": 682 },
      { "Date": 1570979878, "ID": 684 },
      { "Date": 1571001108, "ID": 890 },
      { "Date": 1571001108, "ID": 891 },
      { "Date": 1571001108, "ID": 892 },
      { "Date": 1571719104, "ID": 1043 },
      { "Date": 1571719104, "ID": 1044 },
      { "Date": 1544289596, "ID": 1401 },
      { "Date": 1544341106, "ID": 1602 },
      { "Date": 1544448400, "ID": 1688 },
      { "Date": 1544454826, "ID": 1216 },
      { "Date": 1544454826, "ID": 1217 },
      { "Date": 1544541463, "ID": 1218 },
      { "Date": 1565849638, "ID": 1482 },
      { "Date": 1566038571, "ID": 1483 },
      { "Date": 1568820236, "ID": 1484 },
      { "Date": 1569424934, "ID": 1645 },
      { "Date": 1571843906, "ID": 1646 },
      { "Date": 1572158188, "ID": 1647 },
      { "Date": 1544627726, "ID": 1991 },
      { "Date": 1545062532, "ID": 2058 },
      { "Date": 1547294015, "ID": 2163 },
      { "Date": 1572361639, "ID": 2442 },
      { "Date": 1597158820, "ID": 2619 },
      { "Date": 1618602781, "ID": 2848 },
      { "Date": 1574177418, "ID": 2046 },
      { "Date": 1577729867, "ID": 2045 },
      { "Date": 1603006646, "ID": 2620 },
      { "Date": 1565504216, "ID": 2371 },
      { "Date": 1569611961, "ID": 2372 },
      { "Date": 1565798321, "ID": 2373 },
      { "Date": 1565557403, "ID": 2374 },
      { "Date": 1570715388, "ID": 2375 },
      { "Date": 1569252014, "ID": 2376 },
      { "Date": 1547294015, "ID": 1063 },
      { "Date": 1545468770, "ID": 1377 },
      { "Date": 1575781425, "ID": 1378 },
      { "Date": 1565713913, "ID": 1379 },
      { "Date": 1542429545, "ID": 1433 },
      { "Date": 1544016620, "ID": 1434 },
      { "Date": 1547294015, "ID": 1623 },
      { "Date": 1569683978, "ID": 1634 },
      { "Date": 1571236320, "ID": 1635 },
      { "Date": 1582438895, "ID": 2006 },
      { "Date": 1542955944, "ID": 1769 },
      { "Date": 1540671504, "ID": 114 },
      { "Date": 1540987352, "ID": 115 },
      { "Date": 1542035958, "ID": 116 },
      { "Date": 1545464673, "ID": 117 },
      { "Date": 1571487177, "ID": 118 },
      { "Date": 1596986959, "ID": 119 },
      { "Date": 1609331545, "ID": 1337 },
      { "Date": 1572846375, "ID": 1006 },
      { "Date": 1572894422, "ID": 1007 },
      { "Date": 1574263478, "ID": 1008 },
      { "Date": 1582478281, "ID": 1009 },
      { "Date": 1584149400, "ID": 1010 },
      { "Date": 1570131729, "ID": 1289 },
      { "Date": 1571487177, "ID": 1290 },
      { "Date": 1574255549, "ID": 1291 },
      { "Date": 1569515883, "ID": 1292 },
      { "Date": 1581704375, "ID": 1293 },
      { "Date": 1569515883, "ID": 1295 },
      { "Date": 1573152055, "ID": 1296 },
      { "Date": 1581253728, "ID": 2188 },
      { "Date": 1582104209, "ID": 2189 },
      { "Date": 1584687548, "ID": 2190 },
      { "Date": 1581614459, "ID": 2430 },
      { "Date": 1583002674, "ID": 2431 },
      { "Date": 1584201022, "ID": 2432 },
      { "Date": 1566662214, "ID": 296 },
      { "Date": 1572812697, "ID": 297 },
      { "Date": 1581607519, "ID": 298 },
      { "Date": 1566662214, "ID": 301 },
      { "Date": 1572812697, "ID": 302 },
      { "Date": 1581693650, "ID": 303 },
      { "Date": 1581780247, "ID": 304 },
      { "Date": 1540999350, "ID": 305 },
      { "Date": 1566038571, "ID": 306 },
      { "Date": 1569049010, "ID": 307 },
      { "Date": 1600790536, "ID": 308 },
      { "Date": 1541316398, "ID": 134 },
      { "Date": 1577642231, "ID": 598 },
      { "Date": 1583606418, "ID": 1406 },
      { "Date": 1583663289, "ID": 1499 },
      { "Date": 1597041631, "ID": 1605 },
      { "Date": 1600587794, "ID": 1667 },
      { "Date": 1600617072, "ID": 1695 },
      { "Date": 1600617072, "ID": 1708 },
      { "Date": 1577729867, "ID": 2030 },
      { "Date": 1597041631, "ID": 2569 },
      { "Date": 1606488841, "ID": 2574 },
      { "Date": 1603806324, "ID": 2573 },
      { "Date": 1604169572, "ID": 2575 },
      { "Date": 1606059096, "ID": 2700 },
      { "Date": 1602774603, "ID": 2571 },
      { "Date": 1602948708, "ID": 2696 },
      { "Date": 1606059096, "ID": 2582 },
      { "Date": 1602957737, "ID": 2579 },
      { "Date": 1603122168, "ID": 2704 }
    ],
    "Points": 3735
  },
  "AchievementsPublic": true,
  "Character": {
    "ActiveClassJob": {
      "ClassID": 36,
      "ExpLevel": 6720,
      "ExpLevelMax": 4470000,
      "ExpLevelTogo": 4463280,
      "IsSpecialised": false,
      "JobID": 36,
      "Level": 60,
      "Name": "blue mage / blue mage",
      "UnlockedState": { "ID": null, "Name": "Blue Mage (Limited Job)" }
    },
    "Avatar": "https://img2.finalfantasyxiv.com/f/b7c29d844249e0e549c7f7a08fc0c75e_9df1b3cb0da35db33c17ef11ddf12adafc0_96x96.jpg?1631906726",
    "Bio": "\u30ed\u30fc\u30c9\u30b9\u30c8\u30fc\u30f3\u306e\u65e5\u8a18\u6a5f\u80fd\u3092\u6539\u5584\u3059\u308bChrome\u62e1\u5f35\u6a5f\u80fd\u3092\u4f5c\u3063\u305f\u308a\u3057\u3066\u3044\u307e\u3059\u3002https://chrome.google.com/webstore/detail/ff14-the-lodestone-improv/ldnbicllipdlebclgijapccgefhkkfic",
    "ClassJobs": [
      {
        "ClassID": 1,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 19,
        "Level": 80,
        "Name": "gladiator / paladin",
        "UnlockedState": { "ID": 19, "Name": "Paladin" }
      },
      {
        "ClassID": 3,
        "ExpLevel": 9710728,
        "ExpLevelMax": 13881000,
        "ExpLevelTogo": 4170272,
        "IsSpecialised": false,
        "JobID": 21,
        "Level": 71,
        "Name": "marauder / warrior",
        "UnlockedState": { "ID": 21, "Name": "Warrior" }
      },
      {
        "ClassID": 32,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 32,
        "Level": 80,
        "Name": "dark knight / dark knight",
        "UnlockedState": { "ID": 32, "Name": "Dark Knight" }
      },
      {
        "ClassID": 37,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 37,
        "Level": 80,
        "Name": "gunbreaker / gunbreaker",
        "UnlockedState": { "ID": 37, "Name": "Gunbreaker" }
      },
      {
        "ClassID": 2,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 20,
        "Level": 80,
        "Name": "pugilist / monk",
        "UnlockedState": { "ID": 20, "Name": "Monk" }
      },
      {
        "ClassID": 4,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 22,
        "Level": 80,
        "Name": "lancer / dragoon",
        "UnlockedState": { "ID": 22, "Name": "Dragoon" }
      },
      {
        "ClassID": 29,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 30,
        "Level": 80,
        "Name": "rogue / ninja",
        "UnlockedState": { "ID": 30, "Name": "Ninja" }
      },
      {
        "ClassID": 34,
        "ExpLevel": 4787254,
        "ExpLevelMax": 5316000,
        "ExpLevelTogo": 528746,
        "IsSpecialised": false,
        "JobID": 34,
        "Level": 62,
        "Name": "samurai / samurai",
        "UnlockedState": { "ID": 34, "Name": "Samurai" }
      },
      {
        "ClassID": 6,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 24,
        "Level": 80,
        "Name": "conjurer / white mage",
        "UnlockedState": { "ID": 24, "Name": "White Mage" }
      },
      {
        "ClassID": 26,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 28,
        "Level": 80,
        "Name": "arcanist / scholar",
        "UnlockedState": { "ID": 28, "Name": "Scholar" }
      },
      {
        "ClassID": 33,
        "ExpLevel": 3506292,
        "ExpLevelMax": 6995000,
        "ExpLevelTogo": 3488708,
        "IsSpecialised": false,
        "JobID": 33,
        "Level": 65,
        "Name": "astrologian / astrologian",
        "UnlockedState": { "ID": 33, "Name": "Astrologian" }
      },
      {
        "ClassID": 5,
        "ExpLevel": 873054,
        "ExpLevelMax": 2592000,
        "ExpLevelTogo": 1718946,
        "IsSpecialised": false,
        "JobID": 23,
        "Level": 56,
        "Name": "archer / bard",
        "UnlockedState": { "ID": 23, "Name": "Bard" }
      },
      {
        "ClassID": 31,
        "ExpLevel": 15252,
        "ExpLevelMax": 12449000,
        "ExpLevelTogo": 12433748,
        "IsSpecialised": false,
        "JobID": 31,
        "Level": 70,
        "Name": "machinist / machinist",
        "UnlockedState": { "ID": 31, "Name": "Machinist" }
      },
      {
        "ClassID": 38,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 38,
        "Level": 80,
        "Name": "dancer / dancer",
        "UnlockedState": { "ID": 38, "Name": "Dancer" }
      },
      {
        "ClassID": 7,
        "ExpLevel": 5115356,
        "ExpLevelMax": 7722000,
        "ExpLevelTogo": 2606644,
        "IsSpecialised": false,
        "JobID": 25,
        "Level": 66,
        "Name": "thaumaturge / black mage",
        "UnlockedState": { "ID": 25, "Name": "Black Mage" }
      },
      {
        "ClassID": 26,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 27,
        "Level": 80,
        "Name": "arcanist / summoner",
        "UnlockedState": { "ID": 27, "Name": "Summoner" }
      },
      {
        "ClassID": 35,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 35,
        "Level": 80,
        "Name": "red mage / red mage",
        "UnlockedState": { "ID": 35, "Name": "Red Mage" }
      },
      {
        "ClassID": 36,
        "ExpLevel": 6720,
        "ExpLevelMax": 4470000,
        "ExpLevelTogo": 4463280,
        "IsSpecialised": false,
        "JobID": 36,
        "Level": 60,
        "Name": "blue mage / blue mage",
        "UnlockedState": { "ID": null, "Name": "Blue Mage (Limited Job)" }
      },
      {
        "ClassID": 8,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": true,
        "JobID": 8,
        "Level": 80,
        "Name": "carpenter / carpenter",
        "UnlockedState": { "ID": 8, "Name": "Carpenter" }
      },
      {
        "ClassID": 9,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 9,
        "Level": 80,
        "Name": "blacksmith / blacksmith",
        "UnlockedState": { "ID": 9, "Name": "Blacksmith" }
      },
      {
        "ClassID": 10,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 10,
        "Level": 80,
        "Name": "armorer / armorer",
        "UnlockedState": { "ID": 10, "Name": "Armorer" }
      },
      {
        "ClassID": 11,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": true,
        "JobID": 11,
        "Level": 80,
        "Name": "goldsmith / goldsmith",
        "UnlockedState": { "ID": 11, "Name": "Goldsmith" }
      },
      {
        "ClassID": 12,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 12,
        "Level": 80,
        "Name": "leatherworker / leatherworker",
        "UnlockedState": { "ID": 12, "Name": "Leatherworker" }
      },
      {
        "ClassID": 13,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 13,
        "Level": 80,
        "Name": "weaver / weaver",
        "UnlockedState": { "ID": 13, "Name": "Weaver" }
      },
      {
        "ClassID": 14,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 14,
        "Level": 80,
        "Name": "alchemist / alchemist",
        "UnlockedState": { "ID": 14, "Name": "Alchemist" }
      },
      {
        "ClassID": 15,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": true,
        "JobID": 15,
        "Level": 80,
        "Name": "culinarian / culinarian",
        "UnlockedState": { "ID": 15, "Name": "Culinarian" }
      },
      {
        "ClassID": 16,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 16,
        "Level": 80,
        "Name": "miner / miner",
        "UnlockedState": { "ID": 16, "Name": "Miner" }
      },
      {
        "ClassID": 17,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 17,
        "Level": 80,
        "Name": "botanist / botanist",
        "UnlockedState": { "ID": 17, "Name": "Botanist" }
      },
      {
        "ClassID": 18,
        "ExpLevel": 0,
        "ExpLevelMax": 0,
        "ExpLevelTogo": 0,
        "IsSpecialised": false,
        "JobID": 18,
        "Level": 80,
        "Name": "fisher / fisher",
        "UnlockedState": { "ID": 18, "Name": "Fisher" }
      }
    ],
    "ClassJobsBozjan": {
      "Level": 11,
      "Mettle": 147007,
      "Name": "Resistance Rank"
    },
    "ClassJobsElemental": {
      "ExpLevel": 780023,
      "ExpLevelMax": 1205061,
      "ExpLevelTogo": 425038,
      "Level": 27,
      "Name": "Elemental Level"
    },
    "DC": "Gaia",
    "FreeCompanyId": "9230549648760991047",
    "FreeCompanyName": "Laura Lima",
    "GearSet": {
      "Attributes": {
        "1": 155,
        "2": 239,
        "3": 1245,
        "4": 1276,
        "5": 226,
        "6": 218,
        "7": 18545,
        "8": 10000,
        "19": 354,
        "20": 155,
        "21": 911,
        "22": 663,
        "24": 1591,
        "27": 737,
        "33": 1276,
        "34": 226,
        "44": 553,
        "45": 354,
        "46": 690
      },
      "ClassID": 36,
      "Gear": {
        "Body": {
          "Creator": null,
          "Dye": 5734,
          "ID": 16302,
          "Materia": [],
          "Mirage": 13639
        },
        "Bracelets": {
          "Creator": null,
          "Dye": null,
          "ID": 16321,
          "Materia": [],
          "Mirage": 9294
        },
        "Earrings": {
          "Creator": null,
          "Dye": null,
          "ID": 16311,
          "Materia": [],
          "Mirage": 9293
        },
        "Feet": {
          "Creator": null,
          "Dye": null,
          "ID": 16305,
          "Materia": [],
          "Mirage": 17722
        },
        "Hands": {
          "Creator": null,
          "Dye": 5799,
          "ID": 16303,
          "Materia": [],
          "Mirage": 22361
        },
        "Head": {
          "Creator": null,
          "Dye": null,
          "ID": 16301,
          "Materia": [],
          "Mirage": 28800
        },
        "Legs": {
          "Creator": null,
          "Dye": null,
          "ID": 16304,
          "Materia": [],
          "Mirage": 25000
        },
        "MainHand": {
          "Creator": null,
          "Dye": null,
          "ID": 22746,
          "Materia": [],
          "Mirage": null
        },
        "Necklace": {
          "Creator": null,
          "Dye": null,
          "ID": 16316,
          "Materia": [],
          "Mirage": 9292
        },
        "Ring1": {
          "Creator": null,
          "Dye": null,
          "ID": 16326,
          "Materia": [],
          "Mirage": 9295
        },
        "Ring2": {
          "Creator": null,
          "Dye": null,
          "ID": 17446,
          "Materia": [],
          "Mirage": 9295
        },
        "SoulCrystal": {
          "Creator": null,
          "Dye": null,
          "ID": 22747,
          "Materia": [],
          "Mirage": null
        },
        "Waist": {
          "Creator": null,
          "Dye": null,
          "ID": 16306,
          "Materia": [],
          "Mirage": null
        }
      },
      "GearKey": "36_36",
      "JobID": 36,
      "Level": 60
    },
    "Gender": 2,
    "GrandCompany": { "NameID": 1, "RankID": 10 },
    "GuardianDeity": 9,
    "ID": 23144084,
    "Lang": null,
    "Name": "Mon Meghnad",
    "Nameday": "2nd Sun of the 2nd Astral Moon",
    "ParseDate": 1631906818,
    "Portrait": "https://img2.finalfantasyxiv.com/f/b7c29d844249e0e549c7f7a08fc0c75e_9df1b3cb0da35db33c17ef11ddf12adafl0_640x873.jpg?1631906726",
    "PvPTeamId": null,
    "Race": 6,
    "Server": "Ultima",
    "Title": 558,
    "TitleTop": true,
    "Town": 2,
    "Tribe": 12
  },
  "FreeCompany": null,
  "FreeCompanyMembers": null,
  "Friends": null,
  "FriendsPublic": null,
  "Minions": null,
  "Mounts": null,
  "PvPTeam": null
}
`;

export const CharacterData = () => {
  const data = new CharacterBase(tmpJson);

  return (
    <>
      <div className="mx-auto mt-14 max-w-4xl flex flex-wrap items-center">
        <div className="w-full lg:w-3/5 bg-gray-900">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <CharacterAvatar src={data.avatar} alt={data.name} />

            <CharacterName name={data.name} />
            <CharacterType
              race={data.race}
              tribe={data.tribe}
              gender={data.gender}
            />
            <CharacterServer dc={data.dc} server={data.server} />
            <CharacterFreeCompany fc={data.fc} fcId={data.fcId} />
          </div>
        </div>

        <div className="w-full lg:w-2/6 hidden lg:block">
          <CharacterPortrait src={data.portrait} alt={data.name} />
        </div>
      </div>
    </>
  );
};
