<?xml version="1.0"?>

<flowgorithm fileversion="1.7">

  <attributes>

​    <attribute name="name" value=""/>

​    <attribute name="authors" value="win8"/>

​    <attribute name="about" value=""/>

​    <attribute name="saved" value="13/12/2020 6:03:27 PM"/>

  </attributes>

  <function name="Main" type="None" variable="">

​    <parameters/>

​    <body>

​      <comment text="Armstrong number&#13;&#10;153=[1*1*1]+[5*5*5]+[3*3*3]"/>

​      <declare name="Total" type="Integer" array="False" size="" variables="Total"/>

​      <assign variable="Total" expression="0"/>

​      <declare name="Value" type="String" array="False" size="" variables="Value"/>

​      <input variable="Value"/>

​      <declare name="Length" type="Integer" array="False" size="" variables="Length"/>

​      <for variable="Length" start="0" end="len(value)-1" direction="inc" step="1">

​        <assign variable="Total" expression="Total+Tointeger(Char(value,length))^3"/>

​      </for>

​      <if expression="Total=ToInteger(value)">

​        <then>

​          <output expression="&quot;Is an Armstrong Number&quot;"/>

​        </then>

​        <else>

​          <output expression="&quot;Is NOT an Armstrong Number&quot;"/>

​        </else>

​      </if>

​    </body>

  </function>

</flowgorithm>