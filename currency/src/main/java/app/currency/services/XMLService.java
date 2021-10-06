package app.currency.services;

import app.currency.entities.Currency;
import app.currency.enums.CurrencyName;
import app.currency.repositories.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.*;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;


@Service
public class XMLService {

    @Autowired
    private CurrencyRepository currencyRepository;


    public void parseXml() {
        String CURRENCY = "currency";
        String CUBE_NODE = "//Cube/Cube/Cube";
        String RATE = "rate";
        DocumentBuilderFactory builderFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = null;
        try {
            builder = builderFactory.newDocumentBuilder();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        }
        Document document = null;
        String spec = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
        try {
            URL url = new URL(spec);
            InputStream is = url.openStream();
            document = builder.parse(is);

            XPathFactory xPathfactory = XPathFactory.newInstance();
            XPath xpath = xPathfactory.newXPath();
            String xPathString = CUBE_NODE;
            XPathExpression expr = xpath.compile(xPathString);
            NodeList nl = (NodeList) expr.evaluate(document, XPathConstants.NODESET);
            for (int i = 0; i < nl.getLength(); i++) {
                Node node = nl.item(i);
                NamedNodeMap attribs = node.getAttributes();
                if (attribs.getLength() > 0) {
                    Node currencyAttrib = attribs.getNamedItem(CURRENCY);
                    if (currencyAttrib != null) {
                        String currency = currencyAttrib.getNodeValue();
                        Double rate = Double.parseDouble(attribs.getNamedItem(RATE).getNodeValue());

                        // Getting currency names from enum class
                        CurrencyName currencyName = CurrencyName.valueOf(currency);
                        // Saving to database
                        currencyRepository.save(new Currency(currencyName.getName(),currency,rate));

                    }
                }
            }
            currencyRepository.save(new Currency("Euro", "EUR", 1));
        } catch (SAXException | IOException | XPathExpressionException e) {
            e.printStackTrace();
        }
    }
}
