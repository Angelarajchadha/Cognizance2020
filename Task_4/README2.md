<?xml version="1.0"?>
<flowgorithm fileversion="1.7">
    <attributes>
        <attribute name="name" value=""/>
        <attribute name="authors" value="win8"/>
        <attribute name="about" value=""/>
        <attribute name="saved" value="03/11/2020 1:21:57 PM"/>
    </attributes>
    <function name="Main" type="None" variable="">
        <parameters/>
        <body>
            <declare name="a" type="Integer" array="False" size="" variables="a"/>
            <declare name="b" type="Integer" array="False" size="" variables="b"/>
            <declare name="sum" type="Integer" array="False" size="" variables="sum"/>
            <output expression="&quot;Enter first number:&quot;"/>
            <input variable="a"/>
            <output expression="&quot;Enter second number:&quot;"/>
            <input variable="b"/>
            <output expression="&quot;Run sum!&quot;"/>
            <assign variable="sum" expression="a+b"/>
            <output expression="&quot;Sum is:&quot;"/>
            <output expression="sum"/>
        </body>
    </function>
</flowgorithm>
